'use client';
import './ProgramImageSlider.scss';
import { ProgramImageSliderData } from '@/types/components/ProgramImageSliderData';
import { ImageSwiper } from '../ImageSwiper/ImageSwiper';

interface ProgramImageSliderProps {
	data: ProgramImageSliderData;
}

export default function ProgramImageSlider({ data }: ProgramImageSliderProps) {
	const title = 'PROGRAM';
	return (
		<section className="program-image-slider">
			<ImageSwiper
				images={data.images ?? []}
				showButton={true}
				buttonClassName="program-card__next-btn"
				className="program-card__images"
				imageClassName="program-card__image"
				spaceBetween={10}
				slidesPerView={1.7}
				altText={title || ''}
			/>
		</section>
	);
}
