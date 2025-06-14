import { BaseComponent } from './BaseComponent';

export interface HeroVideoTypes extends BaseComponent {
	video: {
		url: string;
	};
	ctaLink: string;
}
