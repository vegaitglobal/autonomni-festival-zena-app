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

export const fetchProgramByYear = async (year: number) => {
	const queryParams = [
		`filters[year][$eq]=${year}`,
		'populate[components][on][program-components.about-program][populate]=*',
		'populate[components][on][program-components.dialogue-slider][populate]=*',
		'populate[components][on][program-components.program-timeline][populate][schedule][populate]=events',
	];
	const programs = await fetchResource('programs', queryParams);
	return programs.length > 0 ? programs[0] : null;
};
