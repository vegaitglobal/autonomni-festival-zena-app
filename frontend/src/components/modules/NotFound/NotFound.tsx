'use client';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import '../NotFound/not-found.scss';

interface NotFoundProps {
	content?: string;
}

export default function NotFound({ content }: NotFoundProps) {
	const router = useRouter();

	return (
		<div className="outer__wrapper">
			<div className="container background-layout bg">
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
					<h1 className="errorCode">404</h1>
					{content && <ReactMarkdown>{content}</ReactMarkdown>}
				</div>
			</div>
		</div>
	);
}
