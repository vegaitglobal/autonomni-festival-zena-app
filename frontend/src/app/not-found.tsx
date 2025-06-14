'use client';

import RichTextRenderer, {
	RichTextNode,
} from '@/components/modules/richText/RichText';
import { usePage } from '@/hooks/usePage';
import { fetchNotFoundPage } from '@/services/pageService';
import { BasePage } from '@/types/pages/BasePage';
import './not-found.scss';
import { WrappedNextRouterError } from 'next/dist/server/route-modules/app-route/module';

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
		<div className="outer__wrapper">
			<div className="container bgImage">
				<div className="wrapper">
					<div className="imagesHolder"></div>
					<h1 className="errorCode">{content.title}</h1>
					<RichTextRenderer content={content.content} className="richText" />
				</div>
			</div>
		</div>
	);
}
