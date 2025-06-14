'use client';

import { usePage } from '@/hooks/usePage';
import { fetchLayout } from '@/services/layoutService';
import Header from './Header/Header';

export default function LayoutWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const { content: layout, loading, error } = usePage(fetchLayout);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error loading layout: {error}</div>;

	console.log(layout);

	return (
		<>
			<Header layout={layout} />
			<main>{children}</main>
			{/* <Footer layout={layout} /> */}
		</>
	);
}
