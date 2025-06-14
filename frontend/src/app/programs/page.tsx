'use client';

import ProgramsTable from '@/components/modules/ProgramsTable/ProgramsTable';
import { useResource } from '@/hooks/usePage';
import { fetchPrograms } from '@/services/programsService';
import { Program } from '@/types/apiModels/Program';

export default function Programs() {
	const { content, loading, error } = useResource<Program[]>(fetchPrograms);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!content) {
		return <div>No content available</div>;
	}

	return <ProgramsTable programs={content} />;
}
