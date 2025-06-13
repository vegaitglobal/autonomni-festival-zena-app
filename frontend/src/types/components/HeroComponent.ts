import { BaseComponent } from './BaseComponent';

export interface HeroComponent extends BaseComponent {
	title: string;
	backgroundImage: {
		id: number;
		url: string;
		alternativeText?: string;
	};
	ctaLink: string;
}
