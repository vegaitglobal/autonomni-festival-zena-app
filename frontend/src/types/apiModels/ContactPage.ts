import { BaseAPIModel } from '@/types/apiModels/BaseAPIModel';
import { ComponentData } from '@/types/dynamicContent';

export interface ContactPage extends BaseAPIModel {
	components: ComponentData[];
}
