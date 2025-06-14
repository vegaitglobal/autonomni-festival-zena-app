'use client';

import NotFound from '@/components/modules/NotFound/NotFound';
import { useResource } from '@/hooks/usePage';
import { fetchNotFoundPage } from '@/services/pageService';
import './not-found.scss';
import { NotFoundPage } from '@/types/apiModels/NotFound';

export default function NotFoundPage() {
	const { content, loading, error } =
		useResource<NotFoundPage>(fetchNotFoundPage);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!content) return <div>Server error. We will be back.</div>;

	return <NotFound {...content} />;
}
