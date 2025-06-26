import logoStarSVG from '@/assets/orangeLogoWithStar.svg';
import logoBushSVG from '@/assets/yellowLogoWithBush.svg';
import { SeparatorComponentData } from '@/types/components/SeparatorComponent';
import Image from 'next/image';
import './Separator.scss';

interface SeparatorProps {
	data: SeparatorComponentData;
}

export const Separator = ({ data }: SeparatorProps) => {
	const { type } = data;

	const separatorConfigs = {
		logoBush: {
			image: logoBushSVG,
		},
		logoStart: {
			image: logoStarSVG,
		},
	};

	const config =
		separatorConfigs[type as keyof typeof separatorConfigs] ||
		separatorConfigs.logoStart;

	return (
		<div className="separator">
			<Image
				src={config.image.src}
				alt="Combined AFŽ Logo and Background"
				className="separator__image"
				width={1}
				height={1}
			/>
		</div>
	);
};
