import { api } from '@/libs/axios';
import { fetchResource } from './apiService';
import { HomePage } from '@/types/apiModels/HomePage';
import { AboutUsPage } from '@/types/apiModels/AboutUsPage';
import { NotFound } from '@/types/apiModels/NotFound';

interface PageMap {
	'home-page': HomePage;
	'about-us-page': AboutUsPage;
	'not-found-page': NotFound;
}

const DEFAULT_DEEP_POPULATE = ['populate[components][populate]=*'];

const fetchPage = async <K extends keyof PageMap>(
	pageName: K,
	populateConfig?: string[]
): Promise<PageMap[K]> => {
	try {
		const query = populateConfig ? populateConfig.join('&') : 'populate=*';
		const fullUrl = `/${pageName}?${query}`;
		const response = await api.get<{ data: PageMap[K] }>(fullUrl);
		return response.data.data;
	} catch (error) {
		console.error(`Failed to fetch ${pageName} data:`, error);
		throw error;
	}
};

export const fetchHomePage = () =>
	fetchResource('home-page', ['populate[components][populate]=*']);

export const fetchAboutPage = () =>
	fetchResource('about-us-page', DEFAULT_DEEP_POPULATE);

export const fetchNotFoundPage = () => fetchResource('not-found-page');
