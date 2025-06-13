import { ComponentData } from '../dynamicContent/dynamicContent';

export interface BasePage {
	id: number;
	documentId: string;
	Title: string;

	components: ComponentData[];
	// Metadata
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}
