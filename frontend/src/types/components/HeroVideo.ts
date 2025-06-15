import { BaseComponent } from './BaseComponent';

export interface HeroVideoTypes extends BaseComponent {
	url: string
	video: {
		url: string;
	};
}
