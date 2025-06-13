'use client';

import { DynamicContent } from '@/components/hoc/DynamicContent';
import { fetchAboutPage } from '@/services/pageService';

import { usePage } from '@/hooks/usePage';
import { BasePage } from '@/types/pages/BasePage';

export default function About() {
	const { content, loading, error } = usePage<BasePage>(fetchAboutPage);

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
		<div>
			<DynamicContent pageData={content} />
		</div>
	);
}
