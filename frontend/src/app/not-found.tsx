'use client';

import NotFound from '@/components/modules/NotFound/NotFound';
import { useResource } from '@/hooks/usePage';
import { fetchNotFoundPage } from '@/services/pageService';
import { NotFoundPage as NotFoundPageModel } from '@/types/apiModels/NotFound';

export default function NotFoundPage() {
	const { content, loading } =
		useResource<NotFoundPageModel>(fetchNotFoundPage);

	if (loading) return <div>Loading...</div>;

	return <NotFound content={content?.content} />;
}
