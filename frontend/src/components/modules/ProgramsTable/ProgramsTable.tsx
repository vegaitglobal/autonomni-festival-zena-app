'use client';

import Program from '@/components/modules/ProgramsTable/Program/Program';
import { Program as ProgramModel } from '@/types/apiModels/Program';
import Image from 'next/image';
import greenBackground from '@/assets/green-bg.png';
import './ProgramsTable.scss';

interface ProgramsTableProps {
	programs: ProgramModel[];
}

export default function ProgramsTable({ programs }: ProgramsTableProps) {
	const bgHeight = programs.length * 330;
	const paddingTop = bgHeigh / 10;
	return (
		<>
			<div
				className="programs-table"
				style={{ height: bgHeigh, paddingTop: paddingTop }}
			>
				<Image
					src={greenBackground}
					alt="green background"
					className="programs-table-bg"
					width={1000}
					height={bgHeigh}
				/>
				<h1 className="programs__title">PROGRAMI</h1>
				{programs.map((program, index) => {
					const color = index % 2 ? 'green' : 'yellow';
					return <Program program={program} key={program.year} color={color} />;
				})}
			</div>
		</>
	);
}
