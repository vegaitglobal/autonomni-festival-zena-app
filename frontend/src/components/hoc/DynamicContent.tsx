import { ComponentData, ComponentType } from '@/types/dynamicContent';
import { TextComponentData } from '@/types/components/TextComponent';
import { HeroVideoComponent } from '@/types/components/HeroVideoComponent';
import { HeroVideo } from '@/components/modules/HeroVideo/HeroVideo';
import { TextComponent } from '@/components/modules/TextComponent/TextComponent';
import { ProgramSlider } from '@/components/modules/ProgramSlider/ProgramSlider';
import { Separator } from '@/components/modules/Separator/Separator';
import { SeparatorComponentData } from '@/types/components/SeparatorComponent';
import { AboutProgramComponentWithIcon } from '@/types/components/AboutProgramComponent';
import AboutProgram from '@/components/modules/AboutProgram/AboutProgram';

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
			return <ProgramSlider key={`latest-program-${index}`} />;
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
					data={componentData as AboutProgramComponentWithIcon}
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
