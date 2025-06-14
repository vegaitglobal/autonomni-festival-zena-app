'use client';

import { usePage } from '@/hooks/usePage';
import { fetchLayout } from '@/services/layoutService';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function LayoutWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const { content: layout, loading, error } = usePage(fetchLayout);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error loading layout: {error}</div>;

	return (
		<>
			<Header layout={layout} />
			<main>
				<div className="layout__wrapper">
					<div className="inner__wrapper">{children}</div>
				</div>
			</main>
			<Footer layout={layout} />
		</>
	);
}
