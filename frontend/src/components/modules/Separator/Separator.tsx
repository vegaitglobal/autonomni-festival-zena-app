import OrangeLogo from '@/assets/orangeLogoWithStar.svg';
import YellowLogo from '@/assets/yellowLogoWithBush.svg';
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
			image: OrangeLogo,
			className: 'separator--bush',
		},
		logoStart: {
			image: YellowLogo,
			className: 'separator--star',
		},
	};

	const config =
		separatorConfigs[type as keyof typeof separatorConfigs] ||
		separatorConfigs.logoStart;

	return (
		<div className={`separator ${config.className}`}>
			<Image
				src={config.image.src}
				alt="Combined AFŽ Logo and Background"
				className="combined-separator-svg"
				width={1}
				height={1}
			/>
		</div>
	);
};
