import './TextComponent.scss';
import Image from 'next/image';
import { TextComponentData } from '@/types/components/TextComponent';
import HeartAnimation from '@/assets/heart-animation.svg';
import SpringAnimation from '@/assets/spring.svg';
import TreeAnimation from '@/assets/tree-animation.svg';
import ReactMarkdown from 'react-markdown';

interface TextComponentProps {
	data: TextComponentData;
}

export const TextComponent = ({ data }: TextComponentProps) => {
	const { color, text, title } = data;

	const colorConfigs = {
		beige: {
			image: HeartAnimation,
			className: 'text-component--beige',
		},
		pink: {
			image: SpringAnimation,
			className: 'text-component--pink',
		},
		green: {
			image: TreeAnimation,
			className: 'text-component--green',
		},
	};

	const config =
		colorConfigs[color as keyof typeof colorConfigs] || colorConfigs.beige;

	return (
		<section className={`text-component ${config.className}`}>
			<div className="text-component-content-wrapper">
				<div className="text-component__content">
					<div className="text-component__content-wrap">
						<h1 className="text-component__title">{title}</h1>
						<div className="text-component__rte">
							<ReactMarkdown>{text}</ReactMarkdown>
						</div>
					</div>
					<Image
						src={`${config.image.src}`}
						alt="Decorative element"
						className="text-component__decorative-image"
						width={390}
						height={415}
					/>
				</div>
			</div>
		</section>
	);
};
