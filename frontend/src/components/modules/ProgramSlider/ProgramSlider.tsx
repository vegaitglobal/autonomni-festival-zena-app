'use client';

import { useResource } from '@/hooks/usePage';
import { fetchProgramsWithComponents } from '@/services/programsService';
import { Program } from '@/types/apiModels/Program';
import { ProgramSliderData } from '@/types/components/ProgramSliderData';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProgramSlideCard } from './ProgramSlideCard';
import './ProgramSlider.scss';

export const ProgramSlider = () => {
	const swiperRef = useRef<SwiperType | null>(null);
	const { content, loading, error } = useResource<Program[]>(
		fetchProgramsWithComponents
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!content || content.length === 0) {
		return <div>No content available</div>;
	}

	const sortedContent = [...content].sort((a, b) => {
		const yearA = parseInt(a.year);
		const yearB = parseInt(b.year);
		return yearA - yearB;
	});

	return (
		<section className={`program-slider background-layout program-slider--pink`}>
			<div className="program-slider__container">
				<Swiper
					className="program-slider__swiper"
					modules={[Pagination]}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					slidesPerView={1}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
				>
					{sortedContent.map((program: Program) => (
						<SwiperSlide key={program.id}>
							<ProgramSlideCard program={program} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};
