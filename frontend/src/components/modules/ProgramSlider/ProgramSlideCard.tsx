import { Program } from '@/types/apiModels/Program';
import arrowRight from '@/assets/arrow-right.png';
import Image from 'next/image';
import { ImageSwiper } from '../ImageSwiper/ImageSwiper';
import { AboutProgramComponent } from '@/types/components/AboutProgramComponent';
import { DialogueSliderComponent, ProgramTimelineComponent } from '@/types/components/ProgramSliderData';

interface ProgramSlideCardProps {
	program: Program;
}

export const ProgramSlideCard = ({ program }: ProgramSlideCardProps) => {
	const aboutComponent = program.components?.find(
		(comp) => comp.__component === 'program-components.about-program',
	) as AboutProgramComponent;

	const timelineComponent = program.components?.find(
		(comp) => comp.__component === 'program-components.program-timeline',
	) as ProgramTimelineComponent;

	const dialogueComponent = program.components?.find(
		(comp) => comp.__component === 'program-components.dialogue-slider',
	) as DialogueSliderComponent;

	const year = program.year;
	const title = aboutComponent?.title;
	const scheduleDate = timelineComponent?.schedule?.[0]?.date;
	const images = dialogueComponent?.images || [];

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
			<ImageSwiper
				images={images}
				showButton={true}
				buttonClassName="program-card__next-btn"
				className="program-card__images"
				imageClassName="program-card__image"
				spaceBetween={10}
				slidesPerView={1.2}
				altText={title || ''}
			/>
		</div>
	);
};
