'use client';

import { fetchContactPage } from '@/services/pageService';

import SimpleText from '@/components/modules/SimpleText/SimpleText';
import { useResource } from '@/hooks/usePage';
import { ContactPage } from '@/types/apiModels/ContactPage';
import { useRouter } from 'next/navigation';

export default function Contact() {
	const { content, loading, error } = useResource<ContactPage>(fetchContactPage);

	const router = useRouter();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!content) {
		router.push('/not-found');
	}

	return <SimpleText {...content?.components} />;
}
