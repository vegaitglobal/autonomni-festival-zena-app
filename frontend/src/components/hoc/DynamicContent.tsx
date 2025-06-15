import { ComponentData, ComponentType } from '@/types/dynamicContent';
import { TextComponentData } from '@/types/components/TextComponent';
import { HeroVideoComponent } from '@/types/components/HeroVideoComponent';
import { LatestProgramTimeline } from '../modules/LatestProgramTimeline/LatestProgramTimeline';
import { ProgramSliderData } from '@/types/components/ProgramComponent';
import { HeroVideo } from '@/components/modules/HeroVideo/HeroVideo';
import { TextComponent } from '@/components/modules/TextComponent/TextComponent';
import { ProgramSlider } from '@/components/modules/ProgramSlider/ProgramSlider';
import { Separator } from '@/components/modules/Separator/Separator';
import { SeparatorComponentData } from '@/types/components/SeparatorComponent';
import { AboutProgramComponent } from '@/types/components/AboutProgramComponent';
import AboutProgram from '@/components/modules/AboutProgram/AboutProgram';
import ProgramImageSlider from '@/components/modules/ProgramImageSlider/ProgramImageSlider';
import { ProgramImageSliderData } from '@/types/components/ProgramImageSliderData';
import { ProgramTimelineComponent } from '@/types/components/ProgramSliderData';

const renderComponent = (componentData: ComponentData, index: number) => {
	const componentType = componentData.__component.split('.')[1] as ComponentType;

	switch (componentType) {
		case 'hero-video':
			return (
				<HeroVideo
					data={componentData as HeroVideoComponent}
					key={`hero-video-${index}`}
				/>
			);
		case 'rich-text':
			return (
				<TextComponent
					key={`rich-text-${index}`}
					data={componentData as TextComponentData}
				/>
			);
		case 'program-slider':
			return (
				<ProgramSlider
					key={`programs-slider-${index}`}
					data={componentData as ProgramSliderData}
				/>
			);
		case 'animation-separator':
			return (
				<Separator
					key={`separator-${index}`}
					data={componentData as SeparatorComponentData}
				/>
			);
		case 'about-program':
			return (
				<AboutProgram
					key={`about-program-${index}`}
					data={componentData as AboutProgramComponent}
				/>
			);
		case 'dialogue-slider':
			return (
				<ProgramImageSlider
					key={`dialogue-slider-${index}`}
					data={componentData as ProgramImageSliderData}
				/>
			);
		case 'latest-program-timeline':
		case 'program-timeline':
			return (
				<LatestProgramTimeline
					key={`latest-program-timeline-${index}`}
					data={componentData as ProgramTimelineComponent}
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
