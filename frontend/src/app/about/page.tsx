'use client';

import { useResource } from '@/hooks/usePage';
import { fetchAboutUsPage } from '@/services/pageService';
import { AboutUsPage } from '@/types/apiModels/AboutUsPage';

export default function AboutUs() {
	const { content, loading, error } = useResource<AboutUsPage>(fetchAboutUsPage);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!content) {
		return <div>No content available</div>;
	}

	return <div style={{ color: 'white' }}>TODO: ABOUT US CONTENT</div>;
}
