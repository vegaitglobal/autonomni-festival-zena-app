'use client';

import { DynamicContent } from '@/components/hoc/DynamicContent';
import { usePage } from '@/hooks/usePage';
import { fetchHomePage } from '@/services/pageService';
import { BasePage } from '@/types/pages/BasePage';

export default function Home() {
	const { content, loading, error } = usePage<BasePage>(fetchHomePage);

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
			<DynamicContent pageData={content} />
		</>
	);
}
