import { fetchResource } from './apiService';

export const fetchHomePage = () =>
	fetchResource('home-page', ['populate[components][populate]=*']);

export const fetchAboutUsPage = () => fetchResource('about-us-page');

export const fetchNotFoundPage = () => fetchResource('not-found-page');
