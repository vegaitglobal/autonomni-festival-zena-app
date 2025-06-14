import { HeroComponent } from './components/HeroComponent';
import { HeroVideoTypes } from './components/HeroVideo';
import { TextComponentData } from './components/TextComponent';

export type ComponentData = HeroComponent | TextComponentData | HeroVideoTypes;

export type ComponentType = 'hero' | 'text' | 'hero-video';
