'use client';

import AboutUs from '@/components/modules/AboutUs/AboutUs';
import { fetchAboutPage } from '@/services/pageService';

import { useResource } from '@/hooks/usePage';
import { AboutUsPage } from '@/types/apiModels/AboutUsPage';
import { useRouter } from 'next/navigation';

export default function About() {
	const { content, loading, error } = useResource<AboutUsPage>(fetchAboutPage);
	const router = useRouter();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!content) {
		router.push('/not-found');
	}
	return <AboutUs {...content?.components} />;
}
