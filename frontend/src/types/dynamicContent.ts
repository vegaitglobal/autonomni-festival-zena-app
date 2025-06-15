import { AboutProgram } from './apiModels/Program';
import { HeroComponent } from './components/HeroComponent';
import { HeroVideoTypes } from './components/HeroVideo';
import { SeparatorComponentData } from './components/SeparatorComponent';
import { TextComponentData } from './components/TextComponent';

export type ComponentData =
	| HeroComponent
	| TextComponentData
	| HeroVideoTypes
	| AboutProgram
	| SeparatorComponentData;

export type ComponentType =
	| 'hero'
	| 'text'
	| 'hero-video'
	| 'rich-text'
	| 'animation-separator';

export interface PageData {
	components: ComponentData[];
}
