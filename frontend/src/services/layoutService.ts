import { api } from '@/libs/axios';
import { BasePage } from '@/types/pages/BasePage';

const LAYOUT_POPULATE_CONFIG = [
	'populate[header][populate][listLinks][populate]=*',
	'populate[header][populate][headerLogo][populate]=*',
	'populate[footer][populate][listLinks][populate]=*',
	'populate[footer][populate][footerLogo][populate]=*',
	'populate[footer][populate][policy][populate]=*',
	'populate[footer][populate][footerSocialLinks][populate]=*',
];

export const fetchLayout = async (): Promise<any> => {
	try {
		const populateQuery = LAYOUT_POPULATE_CONFIG.join('&');
		const fullUrl = `/layout?${populateQuery}`;

		const response = await api.get<{ data: BasePage }>(fullUrl);
		return response.data.data;
	} catch (error) {
		console.error('Failed to fetch layout data:', error);
		throw error;
	}
};
