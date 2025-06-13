import { api } from '@/libs/axios';
import { BasePage } from '@/types/pages/BasePage';

interface PageMap {
	'home-page': BasePage;
	'about-page': BasePage;
}

const DEFAULT_POPULATE_CONFIG = ['populate[components][populate]=*'];

const fetchPageWithComponents = async <K extends keyof PageMap>(
	pageName: K,

	populateConfig: string[] = DEFAULT_POPULATE_CONFIG
): Promise<PageMap[K]> => {
	try {
		const populateQuery = populateConfig.join('&');
		const fullUrl = `/${pageName}?${populateQuery}`;

		const response = await api.get<{ data: PageMap[K] }>(fullUrl);
		return response.data.data;
	} catch (error) {
		console.error(`Failed to fetch ${pageName} data:`, error);
		const fallbackResponse = await api.get<{ data: PageMap[K] }>(
			`/${pageName}?populate=*`
		);
		return fallbackResponse.data.data;
	}
};

export const fetchHomePage = (): Promise<BasePage> => {
	return fetchPageWithComponents('home-page');
};

export const fetchAboutPage = (): Promise<BasePage> => {
	return fetchPageWithComponents('about-page');
};
