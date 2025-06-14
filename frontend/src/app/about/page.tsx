'use client';

import AboutUs from '@/components/modules/AboutUs/AboutUs';
import { usePage } from '@/hooks/usePage';
import { fetchAboutPage } from '@/services/pageService';
import { BasePage } from '@/types/pages/BasePage';
import { useRouter } from 'next/navigation';

export default function About() {
	const { content, loading, error } = usePage<BasePage>(fetchAboutPage);
	const router = useRouter();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!content) {
		router.push('/not-found');
	}
	return <AboutUs {...content?.components} />;
}
