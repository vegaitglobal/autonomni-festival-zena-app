import { BaseComponent } from '@/types/components/BaseComponent';

export interface HeroVideoComponent extends BaseComponent {
	video: {
		url: string;
	};
	ctaLink: string;
}
