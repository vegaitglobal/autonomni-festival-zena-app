import { fetchResource } from './apiService';

const DEFAULT_DEEP_POPULATE = ['populate[components][populate]=*'];

export const fetchHomePage = () =>
	fetchResource('home-page', DEFAULT_DEEP_POPULATE);

export const fetchAboutUsPage = () =>
	fetchResource('about-us-page', DEFAULT_DEEP_POPULATE);

export const fetchContactPage = () => fetchResource('contact-page')

export const fetchNotFoundPage = () => fetchResource('not-found-page');

export const fetchProgramsWithComponents = () =>
    fetchResource('programs', [
        'populate=components',
        'populate=components.images',
        'populate=components.schedule',
        'populate=components.schedule.events',
    ]);
