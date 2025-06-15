import AnimationYellowLogo from '@/assets/AnimationYellowLogo.json';
import { SeparatorComponentData } from '@/types/components/SeparatorComponent';
import { Animation } from '../Animation/Animation';
import './Separator.scss';

interface SeparatorProps {
	data: SeparatorComponentData;
}

export const Separator = ({ data }: SeparatorProps) => {
	const { type } = data;

	const separatorConfigs = {
		logoBush: {
			image: AnimationYellowLogo,
			height: 460,
			width: 670,
		},
		logoStart: {
			image: AnimationYellowLogo,
			height: 460,
			width: 670,
		},
	};

	const config =
		separatorConfigs[type as keyof typeof separatorConfigs] ||
		separatorConfigs.logoStart;

	return (
		<div className="separator">
			<Animation
				animationData={config.image}
				height={config.height}
				width={config.width}
			/>
		</div>
	);
};
