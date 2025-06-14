import { NotFoundPageProps } from '@/app/not-found';
import { api } from '@/libs/axios';
import { BasePage } from '@/types/pages/BasePage';

interface PageMap {
	'home-page': BasePage;
	'about-page': BasePage;
	'not-found-page': NotFoundPageProps;
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
	fetchPage('home-page', DEFAULT_DEEP_POPULATE);

export const fetchAboutPage = () => fetchPage('about-page');

export const fetchNotFoundPage = () => fetchPage('not-found-page');
