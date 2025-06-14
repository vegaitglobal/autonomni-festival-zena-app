import { useEffect, useState } from 'react';

interface UsePageReturn<T> {
	content: T | null;
	loading: boolean;
	error: string | null;
}

export function useResource<T>(
	fetchFunction: () => Promise<T>
): UsePageReturn<T> {
	const [content, setContent] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				setError(null);
				const data = await fetchFunction();
				setContent(data);
			} catch (error) {
				setError(
					error instanceof Error ? error.message : 'An unknown error occurred'
				);
				setContent(null);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	return {
		content,
		loading,
		error,
	};
}
