import { fetchResource } from '@/services/apiService';
import { Program } from '@/types/apiModels/Program';

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

export const findLatestProgram = (programs: Program[]): Program | null => {
	if (!programs || programs.length === 0) return null;

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	let latestProgram: Program | null = null;
	let latestDate: Date | null = null;

	programs.forEach((program) => {
		const timelineComponent = program.components?.find(
			(comp) => comp.__component === 'program-components.program-timeline'
		);

		if (timelineComponent?.schedule) {
			timelineComponent.schedule.forEach((scheduleItem) => {
				const scheduleDate = new Date(scheduleItem.date);
				scheduleDate.setHours(0, 0, 0, 0);

				// Update latest program if:
				// 1. We haven't found any date yet, OR
				// 2. This date is more recent than our current latest date
				if (!latestDate || scheduleDate > latestDate) {
					latestDate = scheduleDate;
					latestProgram = program;
				}
			});
		}
	});

	return latestProgram;
};

export const findProgramByYear = (
	programs: Program[],
	year: number
): Program | null => {
	if (!programs || programs.length === 0) return null;

	const filteredPrograms = programs.filter((program) => {
		const timelineComponent = program.components?.find(
			(comp) => comp.__component === 'program-components.program-timeline'
		);

		return timelineComponent?.schedule?.some((scheduleItem) => {
			const scheduleDate = new Date(scheduleItem.date);
			return scheduleDate.getFullYear() === year;
		});
	});

	return filteredPrograms.length > 0 ? filteredPrograms[0] : null;
};
