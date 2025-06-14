import { TextComponentData } from '@/types/components/TextComponent';

interface TextSectionProps {
	data: TextComponentData;
}

export const TextComponent = ({ data }: TextSectionProps) => {
	return (
		<div>
			<h1>{data.text}</h1>

			{data.backgroundImage && (
				<img
					src={`${process.env.NEXT_PUBLIC_API_MEDIA_URL}${data.backgroundImage.url}`}
					alt={data.backgroundImage.alternativeText || data.text}
				/>
			)}
		</div>
	);
};
