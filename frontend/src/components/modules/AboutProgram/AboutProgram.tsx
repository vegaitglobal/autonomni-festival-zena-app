import ReactMarkdown from 'react-markdown';
import './AboutProgram.scss';
import { AboutProgramComponent } from '@/types/components/AboutProgramComponent';

interface AboutProgramProps {
	data: AboutProgramComponent;
}

export default function AboutProgram({ data }: AboutProgramProps) {
	return (
		<div className="about-program">
			<h1 className="about-program__title">{data.title}</h1>
			<div className="about-program__text">
				<ReactMarkdown>{data.text}</ReactMarkdown>
			</div>
		</div>
	);
}
