'use client';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import '../NotFound/not-found.scss';

export default function NotFound({ ...props }) {
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
					<ReactMarkdown>{props.content}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
}
