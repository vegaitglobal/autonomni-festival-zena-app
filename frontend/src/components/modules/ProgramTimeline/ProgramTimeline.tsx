'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useEffect, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { useResource } from '@/hooks/usePage';
import { Program } from '@/types/apiModels/Program';
import { Pagination } from 'swiper/modules';
import dateBrush from '@/assets/date-brush-background.png';
import eventTimeBg from '@/assets/event-time-background.png';
import './ProgramTimeline.scss';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import {
	fetchProgramsWithComponents,
	findLatestProgram,
	findProgramByYear,
} from '@/services/programService';

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

export const ProgramTimeline = () => {
	const router = useRouter();
	const currentPathname = usePathname();

	const {
		content: programs,
		loading,
		error,
	} = useResource<Program[]>(fetchProgramsWithComponents);
	const swiperRef = useRef<SwiperType | null>(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	useEffect(() => {
		const s = swiperRef.current;
		if (!s) return;
		const onChange = () => console.log('begin:', s.isBeginning, 'end:', s.isEnd);
		s.on('slideChange', onChange);
		return () => void s.off('slideChange', onChange);
	}, []);

	if (loading) return <div>loading</div>;
	if (error) return <div>error</div>;

	function getProgram(): Program | null {
		if (currentPathname == '/') {
			return findLatestProgram(programs!);
		}

		const segments = currentPathname.split('/').filter(Boolean);
		const lastSegment = segments[segments.length - 1];
		const isYear = /^\d{4}$/.test(lastSegment);
		if (isYear) {
			return findProgramByYear(programs!, parseInt(lastSegment));
		}

		return null;
	}

	const program = getProgram();

	if (!program) return null;

	interface ProgramComponent {
		__component: string;
	}

	const timelineComp = program.components.find(
		(c: ProgramComponent): c is TimelineComponent =>
			c.__component === 'program-components.program-timeline'
	);

	const programData = ((timelineComp?.schedule as ScheduleDay[]) ?? []).map(
		(day) => ({
			date: new Date(day.date),
			events: day.events.map((ev) => ({
				startTime: ev.startTime.slice(0, 5),
				title: ev.title,
				speakers: ev.speakers,
			})),
		})
	);

	const eventPairs: { events: Entry[]; showDate: boolean }[] = [];
	const sliceSize = isMobile ? 1 : 2;

	programData.forEach((day) => {
		const entries = day.events.map((ev) => ({ ...ev, date: day.date }));
		for (let i = 0; i < entries.length; i += sliceSize) {
			const slice = entries.slice(i, i + sliceSize);
			eventPairs.push({ events: slice, showDate: i === 0 });
		}
	});

	const positions = isMobile ? ['50%'] : ['40%', '75%'];
	const formatDate = (d: Date): string => {
		const weekday = d.toLocaleDateString('sr-Latn-RS', { weekday: 'long' });
		const day = String(d.getDate()).padStart(2, '0');
		const month = String(d.getMonth() + 1).padStart(2, '0');
		return `${weekday} ${day}.${month}.`;
	};

	function renderGoToButton() {
		const nextPathname = `/programs/${program!.year}`;
		if (nextPathname != currentPathname) {
			return (
				<button
					className="program-timeline__header-button"
					onClick={() => router.push(nextPathname)}
				/>
			);
		}
	}

	return (
		<div className="program-timeline background-layout">
			<div className="program-timeline__header">
				<h2 className="program-timeline__header-title">SATNICA {program.year}</h2>
				{renderGoToButton()}
			</div>
			<div className="program-timeline__container">
				<Swiper
					modules={[Pagination]}
					pagination={{ clickable: true, dynamicBullets: true }}
					spaceBetween={0}
					slidesPerView={1}
					onSwiper={(s) => (swiperRef.current = s)}
					className="program-timeline__swiper"
				>
					{eventPairs.map((pair, slideIdx) => (
						<SwiperSlide key={slideIdx}>
							<div className="program-timeline__slide">
								<div className="program-timeline__badge-row">
									{pair.showDate && (
										<div
											className="program-timeline__date-badge"
											style={{ backgroundImage: `url("${dateBrush.src}")` }}
										>
											{formatDate(pair.events[0].date)}
										</div>
									)}
									<div className="program-timeline__divider-line" />
									{pair.events.map((ev, i) => (
										<div
											key={i}
											className="program-timeline__time-badge"
											style={
												{
													'--time-badge-left': positions[i],
													backgroundImage: `url("${eventTimeBg.src}")`,
												} as React.CSSProperties
											}
										>
											{ev.startTime}
										</div>
									))}
								</div>
								<div
									className="program-timeline__badge-row"
									style={{ height: '100px' }}
								>
									{pair.events.map((ev, i) => (
										<div
											key={i}
											className="program-timeline__event-title"
											style={{ '--time-badge-left': positions[i] } as React.CSSProperties}
										>
											{ev.title}
										</div>
									))}
								</div>
								<div
									className="program-timeline__badge-row"
									style={{ height: '100px' }}
								>
									{pair.events.map((ev, i) => (
										<div
											key={i}
											className="program-timeline__event-speakers"
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
