'use client';

import { fetchNotFoundPage } from '@/services/pageService';
import { usePage } from '@/hooks/usePage';
import { BasePage } from '@/types/pages/BasePage';
import RichTextRenderer, {
	RichTextNode,
} from '@/components/modules/richText/RichText';

export type NotFoundPageProps = BasePage & {
	title: string;
	content: RichTextNode[];
};

export default function NotFound() {
	const { content, loading, error } =
		usePage<NotFoundPageProps>(fetchNotFoundPage);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!content) return <div>Server error. We will be back.</div>;

	return (
		<div className="max-w-2xl mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">{content.title}</h1>
			<RichTextRenderer content={content.content} />
		</div>
	);
}
