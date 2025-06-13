import { HeroComponent } from '../components/HeroComponent';
import { TextComponentData } from '../components/TextComponent';

export type ComponentData = HeroComponent | TextComponentData;

export type ComponentType = 'hero' | 'text';

export interface PageData {
	components: ComponentData[];
}
