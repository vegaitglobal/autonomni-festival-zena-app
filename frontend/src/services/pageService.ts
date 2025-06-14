import { api } from '@/libs/axios';
import { BasePage } from '@/types/pages/BasePage';

interface PageMap {
	'home-page': BasePage;
	'about-us-page': BasePage;
	'not-found-page': BasePage;
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
	fetchPage('about-us-page', DEFAULT_DEEP_POPULATE);

export const fetchNotFoundPage = () => fetchResource('not-found-page');
