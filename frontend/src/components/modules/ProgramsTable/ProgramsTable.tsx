'use client';

import Program from '@/components/modules/ProgramsTable/Program/Program';
import { Program as ProgramModel } from '@/types/apiModels/Program';
import './ProgramsTable.scss';

interface ProgramsTableProps {
	programs: ProgramModel[];
}

export default function ProgramsTable({ programs }: ProgramsTableProps) {
	return (
		<>
			<div className="programs-table">
				<div className="programs-table-wrapper">
					<h1 className="programs__title">PROGRAMI</h1>
					{programs.map((program, index) => {
						const color = index % 2 ? 'green' : 'yellow';
						return <Program program={program} key={program.year} color={color} />;
					})}
				</div>
			</div>
		</>
	);
}
