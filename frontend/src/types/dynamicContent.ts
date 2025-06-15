import { AboutProgram } from './apiModels/Program';
import { HeroComponent } from './components/HeroComponent';
import { HeroVideoTypes } from './components/HeroVideo';
import { TextComponentData } from './components/TextComponent';
import {ProgramSliderData} from './components/ProgramComponent'

export type ComponentData =
	| HeroComponent
	| TextComponentData
	| HeroVideoTypes
	| AboutProgram
	| ProgramSliderData

export type ComponentType = 'hero' | 'text' | 'hero-video' | 'rich-text' | 'latest-program';

export interface PageData {
	components: ComponentData[];
}
