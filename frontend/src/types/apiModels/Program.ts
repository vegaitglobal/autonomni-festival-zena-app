import { BaseAPIModel } from './BaseAPIModel';
import { ComponentData } from '../dynamicContent';
import { BaseComponent } from '../components/BaseComponent';

type ProgramTheme = 'green' | 'pink';

export interface AboutProgram extends BaseComponent {
	title: string;
	description: string;
}

export interface Program extends BaseAPIModel {
	year: string;
	theme: ProgramTheme;
	components: ComponentData[];
}
