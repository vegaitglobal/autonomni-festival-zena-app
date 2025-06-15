import { BaseAPIModel } from '@/types/apiModels/BaseAPIModel';
import { ComponentData } from '@/types/dynamicContent';

export type ProgramTheme = 'green' | 'pink';

export interface Program extends BaseAPIModel {
	year: string;
	theme: ProgramTheme;
	components: ComponentData[];
}
