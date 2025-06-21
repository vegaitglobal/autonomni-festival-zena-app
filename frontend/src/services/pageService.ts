import { fetchResource } from '@/services/apiService';

const DEFAULT_DEEP_POPULATE = ['populate[components][populate]=*'];

export const fetchHomePage = () =>
	fetchResource('home-page', DEFAULT_DEEP_POPULATE);

export const fetchAboutUsPage = () =>
	fetchResource('about-us-page', DEFAULT_DEEP_POPULATE);

export const fetchContactPage = () => fetchResource('contact-page');

export const fetchNotFoundPage = () => fetchResource('not-found-page');
