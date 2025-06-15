'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { useResource } from '@/hooks/usePage';
import { findLatestProgram } from '@/services/latestProgramService';
import { fetchProgramsWithComponents } from '@/services/pageService';
import { Program } from '@/types/apiModels/Program';
import { ProgramSliderData } from '@/types/components/ProgramComponent';
import { Pagination } from 'swiper/modules';
import dateBrush from '@/assets/date-brush-background.png';
import eventTimeBg from '@/assets/event-time-background.png';
import './LatestProgram.scss';
import { useRouter } from 'next/navigation';

interface LatestProgramProps {
    data: ProgramSliderData;
}

type TimelineComponent = Extract<
    Program['components'][number],
    { __component: 'program-components.program-timeline' }
>;

type RawEvent = {
    id: number;
    startTime: string;
    title: string;
    description: string;
    speakers: string;
};

type ScheduleDay = {
    id: number;
    date: string;
    events: RawEvent[];
};

type Entry = {
    date: Date;
    startTime: string;
    title: string;
    speakers: string;
};

export const ProgramsSlider = ({ data }: LatestProgramProps) => {
    const router = useRouter();
    const { content, loading, error } = useResource<Program[]>(fetchProgramsWithComponents);
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        const s = swiperRef.current;
        if (!s) return;
        const onChange = () => console.log('begin:', s.isBeginning, 'end:', s.isEnd);
        s.on('slideChange', onChange);
        return () => void s.off('slideChange', onChange);
    }, []);

    if (loading) return <div>loading</div>;
    if (error) return <div>error</div>;

    const latest = findLatestProgram(content!);
    const program = Array.isArray(latest) ? latest[0] : latest;

    const timelineComp = program.components.find(
        (c): c is TimelineComponent => c.__component === 'program-components.program-timeline'
    );

    const programData = (timelineComp?.schedule as ScheduleDay[] ?? []).map(day => ({
        date: new Date(day.date),
        events: day.events.map(ev => ({
            startTime: ev.startTime.slice(0, 5),
            title: ev.title,
            speakers: ev.speakers,
        })),
    }));

    const eventPairs: { events: Entry[]; showDate: boolean }[] = [];
    programData.forEach(day => {
        const entries = day.events.map(ev => ({ ...ev, date: day.date }));
        for (let i = 0; i < entries.length; i += 2) {
            const slice = entries.slice(i, i + 2);
            eventPairs.push({ events: slice, showDate: i === 0 });
        }
    });

    const positions = ['30%', '70%'] as const;
    const formatDate = (d: Date): string => {
        const weekday = d.toLocaleDateString('sr-Latn-RS', { weekday: 'long' });
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        return `${weekday} ${day}.${month}.`;
    };

    return (
        <div className="programs-slider">
            <div className="programs-slider__header">
                <h2 className="programs-slider__header-title">SATNICA {program.year}</h2>
                <button
                    className="programs-slider__header-button"
                    onClick={() => router.push(`/programs/${program.year}`)}
                />
            </div>
            <div className="programs-slider__container">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSwiper={s => (swiperRef.current = s)}
                    className="programs-slider__swiper"
                >
                    {eventPairs.map((pair, slideIdx) => (
                        <SwiperSlide key={slideIdx}>
                            <div className="programs-slider__slide">
                                <div className="programs-slider__badge-row">
                                    {pair.showDate && (
                                        <div
                                            className="programs-slider__date-badge"
                                            style={{ backgroundImage: `url("${dateBrush.src}")` }}
                                        >
                                            {formatDate(pair.events[0].date)}
                                        </div>
                                    )}
                                    <div className="programs-slider__divider-line" />
                                    {pair.events.map((ev, i) => (
                                        <div
                                            key={i}
                                            className="programs-slider__time-badge"
                                            style={{
                                                '--time-badge-left': positions[i],
                                                backgroundImage: `url("${eventTimeBg.src}")`,
                                            } as React.CSSProperties}
                                        >
                                            {ev.startTime}h
                                        </div>
                                    ))}
                                </div>
                                <div className="programs-slider__badge-row" style={{ height: '100px' }}>
                                    {pair.events.map((ev, i) => (
                                        <div
                                            key={i}
                                            className="programs-slider__event-title"
                                            style={{ '--time-badge-left': positions[i] } as React.CSSProperties}
                                        >
                                            {ev.title}
                                        </div>
                                    ))}
                                </div>
                                <div className="programs-slider__badge-row" style={{ height: '100px' }}>
                                    {pair.events.map((ev, i) => (
                                        <div
                                            key={i}
                                            className="programs-slider__event-speakers"
                                            style={{ '--time-badge-left': positions[i] } as React.CSSProperties}
                                        >
                                            {ev.speakers}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
