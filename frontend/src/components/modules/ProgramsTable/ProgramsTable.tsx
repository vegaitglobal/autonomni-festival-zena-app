'use client';

import Program from '@/components/modules/ProgramsTable/Program/Program';
import { Program as ProgramModel } from '@/types/apiModels/Program';
import './ProgramsTable.scss';

interface ProgramsTableProps {
	programs: ProgramModel[];
}

export default function ProgramsTable({ programs }: ProgramsTableProps) {

	function renderProgram() {
		if (!programs.length) {
			return (
				<p className="programs__no-programs">
					Trenutno nije objavljen nijedan program
				</p>
			)
		}

		return programs.map((program, index) => {
			const color = index % 2 ? 'green' : 'yellow';
			return <Program program={program} key={program.year} color={color} />;
		});
	}

	return (
		<>
			<div className="programs-table">
				<div className="programs-table-wrapper background-layout">
					<h1 className="programs__title">PROGRAMI</h1>
					{renderProgram()}
				</div>
			</div>
		</>
	);
}
