import { DynamicContent } from '@/components/hoc/DynamicContent';
import { ComponentData } from '@/types/dynamicContent';
import './SimpleText.scss';

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
