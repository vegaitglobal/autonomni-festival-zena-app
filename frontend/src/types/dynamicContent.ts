import { HeroComponent } from './components/HeroComponent';
import { HeroVideoTypes } from './components/HeroVideo';
import { ProgramSliderData } from './components/ProgramSliderData';
import { TextComponentData } from './components/TextComponent';

export type ComponentData =
	| HeroComponent
	| TextComponentData
	| HeroVideoTypes
	| TextComponentData
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
