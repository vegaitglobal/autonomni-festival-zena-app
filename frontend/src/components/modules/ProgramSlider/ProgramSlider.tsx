'use client';

import { useResource } from '@/hooks/usePage';
import { fetchProgramsWithComponents } from '@/services/programService';
import { Program } from '@/types/apiModels/Program';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProgramSlideCard } from './ProgramSlideCard';
import './ProgramSlider.scss';

export const ProgramSlider = () => {
	const swiperRef = useRef<SwiperType | null>(null);
	const {
		content: programs,
		loading,
		error,
	} = useResource<Program[]>(fetchProgramsWithComponents);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!programs || programs.length === 0) return null;

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
					{programs.map((program: Program) => (
						<SwiperSlide key={program.id}>
							<ProgramSlideCard program={program} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};
