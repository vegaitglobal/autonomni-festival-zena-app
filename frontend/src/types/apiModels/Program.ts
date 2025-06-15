import { ProgramComponent } from '../components/ProgramSliderData';
import { BaseAPIModel } from '@/types/apiModels/BaseAPIModel';

export type ProgramTheme = 'green' | 'pink';

export interface Program extends BaseAPIModel {
	year: string;
	theme: ProgramTheme;
	components: ProgramComponent[];
}
