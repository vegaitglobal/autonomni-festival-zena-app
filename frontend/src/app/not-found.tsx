'use client';

import NotFound from '@/components/modules/NotFound/NotFound';
import { usePage } from '@/hooks/usePage';
import { fetchNotFoundPage } from '@/services/pageService';
import { BasePage } from '@/types/pages/BasePage';

export default function NotFoundPage() {
	const { content, loading, error } = usePage<BasePage>(fetchNotFoundPage);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!content) return <div>Server error. We will be back.</div>;

	return <NotFound {...content} />;
}
