import './simple-text.scss';
import '../SimpleText/simple-text.scss';
import { TextComponent } from '../TextComponent/TextComponent';

export default function SimpleText({ ...props }) {
	return (
		<div className="about__wrap">
			<TextComponent data={props[0]}></TextComponent>
		</div>
	);
}
