import { api } from '@/libs/axios';
import { ApiResourcesMap } from '@/types/ResourceMap';

export const fetchResource = async <K extends keyof ApiResourcesMap>(
	resourceName: K,
	queryParams?: string[]
): Promise<ApiResourcesMap[K]> => {
	try {
		const query = queryParams ? queryParams.join('&') : 'populate=*';
		const fullUrl = `/${resourceName}?${query}`;
		const response = await api.get<{ data: ApiResourcesMap[K] }>(fullUrl);
		return response.data.data;
	} catch (error) {
		console.error(`Failed to fetch ${resourceName} data:`, error);
		throw error;
	}
};
