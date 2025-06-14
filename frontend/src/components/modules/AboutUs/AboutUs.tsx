import '../AboutUs/about-us.scss';
import { TextComponent } from '../TextComponent/TextComponent';

export default function AboutUs({ ...props }) {
	return (
		<div className="about__wrap">
			<TextComponent data={props[0]}></TextComponent>
		</div>
	);
}
