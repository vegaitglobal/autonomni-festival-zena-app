import GreenBush from '@/assets/greenBush.svg';
import YellowLogo from '@/assets/logoYellow.svg';
import OrangeLogo from '@/assets/orangeLogo.svg';
import YellowStar from '@/assets/yellowStar.svg';
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
			image: GreenBush,
			logo: YellowLogo,
			className: 'separator--bush',
		},
		logoStart: {
			image: YellowStar,
			logo: OrangeLogo,
			className: 'separator--star',
		},
	};

	const config =
		separatorConfigs[type as keyof typeof separatorConfigs] ||
		separatorConfigs.logoStart;

	return (
		<div className={`separator ${config.className}`}>
			<Image
				src={config.logo.src}
				alt="Autonomni Festival Zena Logo"
				className="separator-logo"
				width={400}
				height={363}
			/>
			<Image
				src={config.image.src}
				alt="Decorative element"
				className="separator-background-image"
				width={240}
				height={270}
			/>
		</div>
	);
};
