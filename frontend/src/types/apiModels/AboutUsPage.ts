import { BaseAPIModel } from '@/types/apiModels/BaseAPIModel';
import { ComponentData } from '@/types/dynamicContent';

export interface AboutUsPage extends BaseAPIModel {
	components: ComponentData[];
}
