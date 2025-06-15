import { ComponentData, ComponentType } from '@/types/dynamicContent';
import { TextComponentData } from '@/types/components/TextComponent';
import { HeroVideoComponent } from '@/types/components/HeroVideoComponent';
import { HeroVideo } from '../modules/HeroVideo/HeroVideo';
import { TextComponent } from '../modules/TextComponent/TextComponent';
import { ProgramsSlider } from '../modules/LatestProgramTimeline/LatestProgram';
import { ProgramSliderData } from '@/types/components/ProgramComponent';
import { Separator } from '../modules/Separator/Separator';
import { SeparatorComponentData } from '@/types/components/SeparatorComponent';

const renderComponent = (componentData: ComponentData, index: number) => {
	const componentType = componentData.__component.split('.')[1] as ComponentType;

	switch (componentType) {
		case 'hero-video':
			return (
				<HeroVideo
					key={`hero-video-${index}`}
					data={componentData as HeroVideoComponent}
				/>
			);
		case 'rich-text':
			return (
				<TextComponent
					key={`rich-text-${index}`}
					data={componentData as TextComponentData}
				/>
			);
		case 'latest-program':
			return (
				<ProgramsSlider
					key={`programs-slider-${index}`}
					data={componentData as ProgramSliderData} />
			);
		case 'animation-separator':
			return (
				<Separator
					key={`separator-${index}`}
					data={componentData as SeparatorComponentData}
				/>
			);
		default:
			return null;
	}
};

interface DynamicContentProps {
	components: ComponentData[];
}

export const DynamicContent = ({ components }: DynamicContentProps) => {
	return (
		<>
			{components?.map((component: ComponentData, index: number) =>
				renderComponent(component, index)
			)}
		</>
	);
};
