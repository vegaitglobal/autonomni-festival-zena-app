import { useLottie } from 'lottie-react';

interface AnimationProps {
	animationData: object;
	loop?: boolean;
	autoplay?: boolean;
	width?: number;
	height?: number;
}

export const Animation = ({
	animationData,
	loop = true,
	autoplay = true,
	height = 470,
	width = 670,
}: AnimationProps) => {
	const options = {
		animationData: animationData,
		loop: loop,
		autoplay: autoplay,
	};

	const { View } = useLottie(options);

	return (
		<div
			style={{
				height: height,
				width: width,
				position: 'absolute',
				// top: '-150%',
				bottom: '-100%',
			}}
		>
			{View}
		</div>
	);
};
