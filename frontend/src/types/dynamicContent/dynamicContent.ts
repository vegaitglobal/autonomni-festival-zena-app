import { HeroComponent } from "../components/hero";

export type ComponentData = HeroComponent;

export type ComponentType = 'hero';

export interface PageData {
  Hero?: HeroComponent | HeroComponent[];
}