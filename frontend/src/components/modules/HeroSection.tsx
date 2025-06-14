import { HeroComponent } from '@/types/components/HeroComponent';

interface HeroSectionProps {
	data: HeroComponent;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
	return (
		<div>
			<h1>{data.title}</h1>

			{data.backgroundImage && (
				<img
					src={`${process.env.NEXT_PUBLIC_API_MEDIA_URL}${data.backgroundImage.url}`}
					alt={data.backgroundImage.alternativeText || data.title}
				/>
			)}

			{data.ctaLink && (
				<a href={data.ctaLink} target="_blank" rel="noopener noreferrer">
					Learn More
				</a>
			)}
		</div>
	);
};
