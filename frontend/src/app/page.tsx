'use client';

import { DynamicContent } from '@/components/hoc/DynamicContent';
import { useResource } from '@/hooks/usePage';
import { fetchHomePage } from '@/services/pageService';
import { HomePage } from '@/types/apiModels/HomePage';

export default function Home() {
	const { content, loading, error } = useResource<HomePage>(fetchHomePage);

	console.log('home content', content);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!content) {
		return <div>No content available</div>;
	}

	return (
		<>
			<DynamicContent components={content.components} />
		</>
	);
}
