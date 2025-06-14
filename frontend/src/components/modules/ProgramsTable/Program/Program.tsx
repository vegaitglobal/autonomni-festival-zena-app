'use client';

import { Program as ProgramModel } from '@/types/apiModels/Program';
import './Program.scss';

interface ProgramCardProps {
	program: ProgramModel;
	color: 'green' | 'yellow';
}

export default function Program({ program, color }: ProgramCardProps) {
	return (
		<a className={`program-card program-card--${color}`} href="#">
			<div className="program-card__header">
				<p className="program-card__year">{program.year}</p>
				<p>TODO: program. aboutProgram. title</p>
			</div>
			<p className="program-card__description">
				TODO: program. aboutProgram. description program. aboutProgram. description
				program. aboutProgram. description program. aboutProgram. description
				program. aboutProgram. description program. aboutProgram. description
			</p>
		</a>
	);
}
