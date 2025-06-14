import { BaseAPIModel } from './BaseAPIModel';
import { ComponentData } from '../dynamicContent';

export interface ContactPage extends BaseAPIModel {
    components: ComponentData[];
}
