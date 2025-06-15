import { fetchResource } from './apiService';

export const fetchPrograms = () => fetchResource('programs');

export const fetchProgramsWithComponents = () =>
	fetchResource('programs', [
		'populate=components',
		'populate=components.images',
		'populate=components.schedule',
		'populate=components.schedule.events',
	]);
