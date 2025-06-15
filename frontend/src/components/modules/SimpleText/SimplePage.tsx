import { DynamicContent } from '@/components/hoc/DynamicContent';
import { ComponentData } from '@/types/dynamicContent';
import './SimplePage.scss';

interface SimplePageProps {
	components: ComponentData[];
}

export default function SimplePage({ components }: SimplePageProps) {
	return (
		<div className="about__wrap">
			<DynamicContent components={components} />
		</div>
	);
}
