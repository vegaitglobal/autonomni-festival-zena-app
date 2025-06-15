import { BaseAPIModel } from '@/types/apiModels/BaseAPIModel';
import { ComponentData } from '@/types/dynamicContent';

export interface HomePage extends BaseAPIModel {
	components: ComponentData[];
}
