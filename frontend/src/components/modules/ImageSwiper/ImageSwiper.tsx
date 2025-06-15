'use client';

import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import arrowRotate from '@/assets/slider-image-arrow.svg';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

interface ImageSwiperProps {
	images: any[];
	showButton?: boolean;
	className?: string;
	spaceBetween?: number;
	slidesPerView?: number;
	altText?: string;
	buttonClassName?: string;
	inner?: string;
	imageClassName?: string;
}

export const ImageSwiper = ({
	images,
	showButton = true,
	className,
	spaceBetween = 10,
	slidesPerView = 1.2,
	buttonClassName,
	imageClassName,
	altText = '',
}: ImageSwiperProps) => {
	const swiperRef = useRef<SwiperType | null>(null);

	const handleNextSlide = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext();
		}
	};

	if (!images || images.length === 0) {
		return null;
	}

	return (
		<div className={`slider-wrap ${className}`}>
			{showButton && images.length > 1 && (
				<button
					className={`slider-button ${buttonClassName}`}
					onClick={handleNextSlide}
					type="button"
					aria-label="Next image"
				>
					<Image src={arrowRotate} alt="Next" width={70} height={70} />
				</button>
			)}
			<Swiper
				spaceBetween={spaceBetween}
				slidesPerView={slidesPerView}
				loop={images.length > 1}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				className="program-card__images-swiper"
			>
				{images.map((image, index) => (
					<SwiperSlide key={image.id || index}>
						<div className={`${imageClassName}`}>
							<img
								src={`${process.env.NEXT_PUBLIC_API_MEDIA_URL}${image.url}`}
								alt={image.alternativeText || altText || ''}
								loading="lazy"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
