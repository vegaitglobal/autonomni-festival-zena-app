'use client';

import {
	AboutProgramComponent,
	Program as ProgramModel,
} from '@/types/apiModels/Program';
import arrowRight from '@/assets/arrow-right.png';
import Image from 'next/image';
import './Program.scss';

interface ProgramCardProps {
	program: ProgramModel;
	color: 'green' | 'yellow';
}

export default function Program({ program, color }: ProgramCardProps) {
	const aboutProgram = program.components[0] as AboutProgramComponent;

	return (
		<a
			className={`program-card program-card--${color}`}
			href={`/programs/${program.year}`}
		>
			<div className="program-card__header">
				<p className="program-card__year">{program.year}</p>
				<p>{aboutProgram.title}</p>
			</div>
			<p className="program-card__description">{aboutProgram.description}</p>
			<Image
				className="program-card__arrow"
				src={arrowRight}
				alt="arrow"
				width={50}
				height={25}
			/>
		</a>
	);
}
