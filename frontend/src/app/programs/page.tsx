'use client';

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

	return <div style={{ color: 'white' }}>TODO: list of programs</div>;
}
