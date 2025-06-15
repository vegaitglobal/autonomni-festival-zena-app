import { useLottie } from 'lottie-react';
import './Animation.scss';
interface AnimationProps {
	animationData: object;
	loop?: boolean;
	autoplay?: boolean;
	className?: string;
}

export const Animation = ({
	animationData,
	loop = true,
	autoplay = true,
	className,
}: AnimationProps) => {
	const options = {
		animationData: animationData,
		loop: loop,
		autoplay: autoplay,
	};

	const { View } = useLottie(options);

	return <div className={className}>{View}</div>;
};
