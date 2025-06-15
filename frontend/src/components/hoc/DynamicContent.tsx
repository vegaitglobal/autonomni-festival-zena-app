import { ComponentData, ComponentType } from '@/types/dynamicContent';
import { TextComponentData } from '@/types/components/TextComponent';
import { HeroVideoTypes } from '@/types/components/HeroVideo';
import { HeroVideo } from '../modules/HeroVideo/HeroVideo';
import { Suspense } from 'react';
import HeroVideoSkeleton from '../modules/HeroVideo/HeroVideoSkeleton';
import { TextComponent } from '../modules/TextComponent/TextComponent';

const renderComponent = (componentData: ComponentData, index: number) => {
	const componentType = componentData.__component.split('.')[1] as ComponentType;

	switch (componentType) {
		case 'hero-video':
			return (
				<Suspense fallback={<HeroVideoSkeleton />} key={`hero-video-${index}`}>
					<HeroVideo
						data = {componentData as HeroVideoTypes}
					/>
      			</Suspense>
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
