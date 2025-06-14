'use client';

import { useResource } from '@/hooks/usePage';
import { fetchLayout } from '@/services/layoutService';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function LayoutWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const { content: layout, loading, error } = useResource(fetchLayout);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error loading layout: {error}</div>;

	return (
		<>
			<Header header={layout!.header} />
			<main>
				<div className="layout__wrapper">
					<div className="inner__wrapper">{children}</div>
				</div>
			</main>
			<Footer footer={layout!.footer} />
		</>
	);
}
