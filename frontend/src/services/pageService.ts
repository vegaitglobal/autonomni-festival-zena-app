import { fetchResource } from './apiService';

const DEFAULT_DEEP_POPULATE = ['populate[components][populate]=*'];

export const fetchHomePage = () =>
	fetchResource('home-page', DEFAULT_DEEP_POPULATE);

export const fetchAboutUsPage = () =>
	fetchResource('about-us-page', DEFAULT_DEEP_POPULATE);

export const fetchNotFoundPage = () => fetchResource('not-found-page');
