'use client';

import { useResource } from '@/hooks/usePage';
import { fetchProgramByYear } from '@/services/programService';
import { Program } from '@/types/apiModels/Program';
import Image from 'next/image';
import { DynamicContent } from '@/components/hoc/DynamicContent';
import halfBottomBushGreen from '@/assets/half-bottom-bush-green.svg';
import starDarkGreen from '@/assets/star-dark-green.svg';
import './ProgramDetails.scss';
import { notFound } from "next/navigation";

interface ProgramDetailsProps {
	year: number;
}

export default function ProgramDetails({ year }: ProgramDetailsProps) {
	const {
		content: program,
		loading,
	} = useResource<Program | null>(() => fetchProgramByYear(year));

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!program) {
		notFound();
	}

	function renderTopImage() {
		switch (program!.theme) {
			case 'green':
				return (
					<Image
						className="program-details-top-img"
						src={starDarkGreen}
						height={100}
						width={100}
						alt="dark green star"
					/>
				);
			case 'pink':
				return (
					<Image
						className="program-details-top-img"
						src={halfBottomBushGreen}
						height={100}
						width={100}
						alt="green star"
					/>
				);
			default:
				return null;
		}
	}

	return (
		<div className={`program-details-bg program-details-bg--${program.theme}`}>
			{renderTopImage()}
			<DynamicContent components={program.components} />
		</div>
	);
}
