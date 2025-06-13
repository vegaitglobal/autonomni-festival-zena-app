import { BaseComponent } from './BaseComponent';

export interface TextComponentData extends BaseComponent {
	text: string;
	backgroundImage: {
		id: number;
		url: string;
		alternativeText?: string;
	};
	showImage: boolean;
}
