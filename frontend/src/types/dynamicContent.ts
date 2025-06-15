import { ProgramSliderData } from './components/ProgramSliderData';
import { AboutProgramComponent } from '@/types/components/AboutProgramComponent';
import { HeroVideoComponent } from '@/types/components/HeroVideoComponent';
import { TextComponentData } from '@/types/components/TextComponent';
import { SeparatorComponentData } from './components/SeparatorComponent';

export type ComponentData =
	| TextComponentData
	| HeroVideoComponent
	| AboutProgramComponent
	| SeparatorComponentData
	| ProgramSliderData;

export type ComponentType =
	| 'hero'
	| 'text'
	| 'hero-video'
	| 'rich-text'
	| 'latest-program'
	| 'animation-separator';

export interface PageData {
	components: ComponentData[];
}
