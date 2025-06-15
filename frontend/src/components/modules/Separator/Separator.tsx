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
			className: 'separator--bush',
		},
		logoStart: {
			image: AnimationYellowLogo,
			className: 'separator--star',
		},
	};

	const config =
		separatorConfigs[type as keyof typeof separatorConfigs] ||
		separatorConfigs.logoStart;

	return (
		<div className={`separator ${config.className}`}>
			<Animation animationData={config.image} className={config.className} />
		</div>
	);
};
