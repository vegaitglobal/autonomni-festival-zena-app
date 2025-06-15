import ProgramDetails from '@/components/modules/ProgramDetails/ProgramDetails';

interface ProgramDetailsProgramProps {
	params: Promise<{ year: string }>;
}

export default async function ProgramDetailsProgram({
	params,
}: ProgramDetailsProgramProps) {
	const { year } = await params;

	// TODO: handle invalid year!

	return <ProgramDetails year={parseInt(year)} />;
}
