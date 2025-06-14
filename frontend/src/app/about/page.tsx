'use client';

import { fetchAboutUsPage } from '@/services/pageService';

import SimpleText from '@/components/modules/SimpleText/SimpleText';
import { useResource } from '@/hooks/usePage';
import { AboutUsPage } from '@/types/apiModels/AboutUsPage';
import { useRouter } from 'next/navigation';

export default function About() {
	const { content, loading, error } = useResource<AboutUsPage>(fetchAboutUsPage);
	const router = useRouter();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!content) {
		router.push('/not-found');
	}
	return <SimpleText {...content?.components} />;
}
