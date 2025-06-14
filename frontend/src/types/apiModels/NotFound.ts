import { BaseAPIModel } from './BaseAPIModel';
import { RichTextNode } from '@/components/modules/richText/RichText';

export interface NotFoundPage extends BaseAPIModel {
	title: string;
	content: RichTextNode[];
}
