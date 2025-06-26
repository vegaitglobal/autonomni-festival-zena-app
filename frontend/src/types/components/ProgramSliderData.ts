import { BaseComponent } from './BaseComponent';

export interface ProgramSliderData extends BaseComponent {
	title: string;
}

export interface BaseStrapiComponent {
	id: number;
	__component: string;
}

export interface AboutProgramComponent extends BaseStrapiComponent {
	__component: 'program-components.about-program';
	title: string;
	text: string;
}

export interface DialogueSliderComponent extends BaseStrapiComponent {
	__component: 'program-components.dialogue-slider';
	images?: StrapiImage[];
}

export interface ProgramTimelineComponent extends BaseStrapiComponent {
	__component: 'program-components.program-timeline';
	schedule?: ScheduleItem[];
	title: string;
}

export interface ScheduleItem {
	id: number;
	date: string;
	events?: EventItem[];
}

export interface EventItem {
	id: number;
	startTime: string;
	title: string;
	description: string;
	speakers: string;
}

export interface StrapiImage {
	id: number;
	documentId: string;
	name: string;
	alternativeText?: string;
	caption?: string;
	width: number;
	height: number;
	formats?: {
		thumbnail?: ImageFormat;
		small?: ImageFormat;
		medium?: ImageFormat;
		large?: ImageFormat;
	};
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl?: string;
	provider: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface ImageFormat {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path?: string;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
}

export type ProgramComponent =
	| AboutProgramComponent
	| DialogueSliderComponent
	| ProgramTimelineComponent;
