'use client';

import { fetchContactPage } from '@/services/pageService';

import SimplePage from '@/components/modules/SimpleText/SimplePage';
import { useResource } from '@/hooks/usePage';
import { ContactPage } from '@/types/apiModels/ContactPage';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Contact() {
	const { content, loading, error } = useResource<ContactPage>(fetchContactPage);

	const router = useRouter();

useEffect(() => {
		if (error || (!loading && !content)) {
			router.push('/not-found');
		}
	}, [error, content, loading, router]);

	if (loading || error) return null;

	return <SimplePage components={content!.components} />;
}
