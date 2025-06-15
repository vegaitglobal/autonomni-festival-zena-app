import { ComponentData, ComponentType } from '@/types/dynamicContent';
import { TextComponentData } from '@/types/components/TextComponent';
import { HeroVideoTypes } from '@/types/components/HeroVideo';
import { HeroVideo } from '../modules/HeroVideo/HeroVideo';
import { TextComponent } from '../modules/TextComponent/TextComponent';
import { ProgramsSlider } from '../modules/LatestProgramTimeline/LatestProgram';
import { ProgramSliderData } from '@/types/components/ProgramComponent';

const renderComponent = (componentData: ComponentData, index: number) => {
	const componentType = componentData.__component.split('.')[1] as ComponentType;

	switch (componentType) {
		case 'hero-video':
			return (
				<HeroVideo
					key={`hero-video-${index}`}
					data={componentData as HeroVideoTypes}
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
