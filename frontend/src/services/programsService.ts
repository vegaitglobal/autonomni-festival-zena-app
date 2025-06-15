import { fetchResource } from '@/services/apiService';

export const fetchProgramsWithComponents = () =>
	fetchResource('programs', [
		'populate=components',
		'populate=components.images',
		'populate=components.schedule',
		'populate=components.schedule.events',
	]);
export const fetchPrograms = () => {
	const queryParams = [
		'populate[components][on][program-components.about-program][populate]=*',
	];
	return fetchResource('programs', queryParams);
};
