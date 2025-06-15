import { BaseAPIModel } from './BaseAPIModel';
import { ComponentData } from '../dynamicContent';
import { ProgramComponent } from '../components/ProgramSliderData';

type ProgramTheme = 'green' | 'pink';

export interface Program extends BaseAPIModel {
	year: string;
	theme: ProgramTheme;
	components: ProgramComponent[];
}
