import { BaseAPIModel } from './BaseAPIModel';
import { ComponentData } from '../dynamicContent';

type ProgramTheme = 'green' | 'pink';

export interface Program extends BaseAPIModel {
	year: string;
	theme: ProgramTheme;
	components: ComponentData[];
}
