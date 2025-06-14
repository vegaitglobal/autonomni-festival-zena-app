import { DynamicContent } from '@/components/hoc/DynamicContent';
import './SimpleText.scss';
import { ComponentData } from '@/types/dynamicContent';

interface SimpleTextProps {
	components: ComponentData[];
}

export default function SimpleText({ components }: SimpleTextProps) {
	return (
		<div className="about__wrap">
			<DynamicContent components={components} />
		</div>
	);
}
