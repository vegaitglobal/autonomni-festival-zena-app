import { BaseAPIModel } from './BaseAPIModel';
import { ComponentData } from '../dynamicContent';

export interface HomePage extends BaseAPIModel {
	components: ComponentData[];
}
