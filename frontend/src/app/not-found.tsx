'use client';

import RichTextRenderer, {
	RichTextNode,
} from '@/components/modules/richText/RichText';
import { usePage } from '@/hooks/usePage';
import { fetchNotFoundPage } from '@/services/pageService';
import { BasePage } from '@/types/pages/BasePage';
import './not-found.scss';
import { useRouter } from 'next/navigation';

export type NotFoundPageProps = BasePage & {
	title: string;
	content: RichTextNode[];
};

export default function NotFound() {
	const { content, loading, error } =
		usePage<NotFoundPageProps>(fetchNotFoundPage);
	const router = useRouter();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!content) return <div>Server error. We will be back.</div>;

	return (
		<div className="outer__wrapper">
			<div className="container bg">
				<div className="wrapper">
					<div className="imagesHolder">
						{[...Array(4)].map((_, i) => (
							<div key={i} className={`img${i + 1}`}></div>
						))}
						<button
							className="img5"
							onClick={() => {
								router.push('/');
							}}
						></button>
					</div>
					<h1 className="errorCode">{content.title}</h1>
					<RichTextRenderer content={content.content} className="richText" />
				</div>
			</div>
		</div>
	);
}
