import { Program } from '@/types/apiModels/Program';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import arrowRight from '@/assets/arrow-right.png';
import arrowRotate from '@/assets/slider-image-arrow.svg';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

interface ProgramSlideCardProps {
	program: Program;
}

export const ProgramSlideCard = ({ program }: ProgramSlideCardProps) => {
	const swiperRef = useRef<SwiperType | null>(null);

	const aboutComponent = program.components?.find(
		(comp) => comp.__component === 'program-components.about-program'
	);

	const timelineComponent = program.components?.find(
		(comp) => comp.__component === 'program-components.program-timeline'
	);

	const dialogueComponent = program.components?.find(
		(comp) => comp.__component === 'program-components.dialogue-slider'
	);

	const year = program.year;
	const title = aboutComponent?.title;
	const scheduleDate = timelineComponent?.schedule?.[0]?.date;
	const images = dialogueComponent?.images || [];

	const handleNextSlide = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext();
		}
	};

	return (
		<div className="program-card">
			<div className="program-card__content">
				<div className="program-card__content-top">
					<span className="program-card__tag">PROGRAM</span>
				</div>
				<div className="program-card__content-text">
					<div className="program-card__year">{year}</div>
					<h3 className="program-card__title">
						{title}
						{scheduleDate &&
							` - ${new Date(scheduleDate).toLocaleDateString('sr-Latn-RS', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}`}
					</h3>
				</div>
				<div className="program-card__content-link">
					<a href={`/programs/${year}`} className="program-card__link">
						<span className="program-card__link-text">Procitaj više</span>
						<Image
							className="program-card__link-arrow"
							src={arrowRight}
							alt="arrow"
							width={80}
							height={50}
						/>
					</a>
				</div>
			</div>
			{images.length > 0 && (
				<div className="program-card__images">
					{images.length > 1 && (
						<button
							className="program-card__next-btn"
							onClick={handleNextSlide}
							type="button"
							aria-label="Next image"
						>
							<Image src={arrowRotate} alt="Next" width={70} height={70} />
						</button>
					)}
					<Swiper
						spaceBetween={40}
						slidesPerView={1.2}
						loop={images.length > 1}
						onSwiper={(swiper) => (swiperRef.current = swiper)}
						className="program-card__images-swiper"
					>
						{images.map((image, index) => (
							<SwiperSlide key={image.id || index}>
								<div className="program-card__image">
									<img
										src={`${process.env.NEXT_PUBLIC_API_MEDIA_URL}${image.url}`}
										alt={image.alternativeText || title || ''}
										loading="lazy"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</div>
	);
};
