import { DynamicContent } from '@/components/hoc/DynamicContent';
import '../SimpleText/simple-text.scss';
import './simple-text.scss';
import { ComponentData } from '@/types/dynamicContent';

interface SimpleTextProps {
	components: ComponentData[];
}

export default function SimpleText({ components }: SimpleTextProps) {
	return (
		<>
			<DynamicContent components={components} />
		</>
	);
}
