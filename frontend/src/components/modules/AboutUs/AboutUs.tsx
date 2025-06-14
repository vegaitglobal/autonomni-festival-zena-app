import '../AboutUs/about-us.scss';
import ReactMarkdown from 'react-markdown';

export default function AboutUs({ ...props }) {
	return (
		<div className="outer__wrapper">
			<div className="container bg">
				<div className="wrapper">
					<div className="box">
						<h1 className="title">{props[0].title}</h1>
						<ReactMarkdown>{props[0].text}</ReactMarkdown>
					</div>
				</div>
			</div>
		</div>
	);
}
