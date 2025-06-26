'use client';

import { fetchAboutUsPage } from '@/services/pageService';

import SimplePage from '@/components/modules/SimpleText/SimplePage';
import { useResource } from '@/hooks/usePage';
import { AboutUsPage } from '@/types/apiModels/AboutUsPage';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function About() {
	const { content, loading, error } = useResource<AboutUsPage>(fetchAboutUsPage);
	const router = useRouter();

	useEffect(() => {
		if (error || (!loading && !content)) {
			router.push('/not-found');
		}
	}, [error, content, loading, router]);

	if (loading || error) return null;

	return <SimplePage components={content!.components} />;
}
