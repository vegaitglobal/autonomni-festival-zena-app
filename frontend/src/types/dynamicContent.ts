import { ProgramSliderData } from './components/ProgramSliderData';
import { AboutProgramComponent } from '@/types/components/AboutProgramComponent';
import { HeroVideoComponent } from '@/types/components/HeroVideoComponent';
import { TextComponentData } from '@/types/components/TextComponent';

export type ComponentData =
	| TextComponentData
	| HeroVideoComponent
	| AboutProgramComponent
	| ProgramSliderData;

export type ComponentType =
	| 'hero'
	| 'text'
	| 'hero-video'
	| 'rich-text'
	| 'latest-program';

export interface PageData {
	components: ComponentData[];
}
