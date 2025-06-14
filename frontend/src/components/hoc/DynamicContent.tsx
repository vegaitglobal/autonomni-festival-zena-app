import { ComponentData, ComponentType } from '@/types/dynamicContent';
import { HeroSection } from '../modules/HeroSection';
import { HeroComponent } from '@/types/components/HeroComponent';
import { TextComponent } from '../modules/Text';
import { TextComponentData } from '@/types/components/TextComponent';
import { HeroVideoTypes } from '@/types/components/HeroVideo';
import { HeroVideo } from '../modules/HeroVideo/HeroVideo';

const renderComponent = (componentData: ComponentData, index: number) => {
	const componentType = componentData.__component.split('.')[1] as ComponentType;

	switch (componentType) {
		case 'hero':
			return (
				<HeroSection key={`hero-${index}`} data={componentData as HeroComponent} />
			);
		case 'text':
			return (
				<TextComponent
					key={`text-${index}`}
					data={componentData as TextComponentData}
				/>
			);
		case 'hero-video':
			return (
				<HeroVideo
					key={`hero-video-${index}`}
					data={componentData as HeroVideoTypes}
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
