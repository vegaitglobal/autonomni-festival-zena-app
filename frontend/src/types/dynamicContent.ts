import { AboutProgramComponent } from '@/types/components/AboutProgramComponent';
import { HeroComponent } from '@/types/components/HeroComponent';
import { HeroVideoComponent } from '@/types/components/HeroVideoComponent';
import { TextComponentData } from '@/types/components/TextComponent';

export type ComponentData =
	| HeroComponent
	| TextComponentData
	| HeroVideoComponent
	| AboutProgramComponent;

export type ComponentType = 'hero' | 'text' | 'hero-video' | 'rich-text';

export interface PageData {
	components: ComponentData[];
}
