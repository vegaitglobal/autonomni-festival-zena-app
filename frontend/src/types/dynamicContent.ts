import {
	DialogueSliderComponent,
	ProgramSliderData,
	ProgramTimelineComponent,
} from './components/ProgramSliderData';
import { AboutProgramComponent } from '@/types/components/AboutProgramComponent';
import { HeroVideoComponent } from '@/types/components/HeroVideoComponent';
import { TextComponentData } from '@/types/components/TextComponent';
import { SeparatorComponentData } from '@/types/components/SeparatorComponent';
import { ProgramImageSliderData } from './components/ProgramImageSliderData';

export type ComponentData =
	| TextComponentData
	| HeroVideoComponent
	| AboutProgramComponent
	| SeparatorComponentData
	| ProgramSliderData
	| ProgramImageSliderData
	| DialogueSliderComponent
	| ProgramTimelineComponent;

export type ComponentType =
	| 'hero'
	| 'text'
	| 'hero-video'
	| 'rich-text'
	| 'animation-separator'
	| 'program-slider'
	| 'animation-separator'
	| 'about-program'
	| 'dialogue-slider'
	| 'latest-program-timeline'
	| 'program-timeline';

export interface PageData {
	components: ComponentData[];
}
