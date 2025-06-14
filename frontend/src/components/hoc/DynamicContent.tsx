import {
	ComponentData,
	ComponentType,
	PageData,
} from '@/types/dynamicContent/dynamicContent';

import { TextComponentData } from '@/types/components/TextComponent';
import { HeroVideoTypes } from '@/types/components/HeroVideo';
import { HeroVideo } from '../modules/HeroVideo/HeroVideo';
import { TextComponent } from '../modules/TextComponent/TextComponent';

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
		default:
			return null;
	}
};

export const DynamicContent = ({ pageData }: { pageData: PageData }) => {
	return (
		<>
			{pageData.components?.map((component: ComponentData, index: number) =>
				renderComponent(component, index)
			)}
		</>
	);
};
