import { fetchResource } from '@/services/apiService';

export const fetchPrograms = () => {
	const queryParams = [
		'populate[components][on][program-components.about-program][populate]=*',
	];
	return fetchResource('programs', queryParams);
};
