import { BaseAPIModel } from './BaseAPIModel';
import { ComponentData } from '../dynamicContent';

export interface AboutUsPage extends BaseAPIModel {
	components: ComponentData[];
}
