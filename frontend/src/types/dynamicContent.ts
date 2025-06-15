import { AboutProgramComponent } from '@/types/components/AboutProgramComponent';
import { HeroVideoComponent } from '@/types/components/HeroVideoComponent';
import { TextComponentData } from '@/types/components/TextComponent';
import { SeparatorComponentData } from './components/SeparatorComponent';
import {ProgramSliderData} from './components/ProgramComponent'

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
	| 'animation-separator'
	| 'latest-program';

export interface PageData {
	components: ComponentData[];
}
