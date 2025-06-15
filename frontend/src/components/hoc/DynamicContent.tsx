import { ComponentData, ComponentType } from '@/types/dynamicContent';
import { TextComponentData } from '@/types/components/TextComponent';
import { HeroVideoTypes } from '@/types/components/HeroVideo';
import { HeroVideo } from '../modules/HeroVideo/HeroVideo';
import { TextComponent } from '../modules/TextComponent/TextComponent';
import { Separator } from '../modules/Separator/Separator';
import { SeparatorComponentData } from '@/types/components/SeparatorComponent';

const renderComponent = (componentData: ComponentData, index: number) => {
	const componentType = componentData.__component.split('.')[1] as ComponentType;
	console.log(componentData);
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
