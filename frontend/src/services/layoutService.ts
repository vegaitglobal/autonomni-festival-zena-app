import { fetchResource } from './apiService';

export const fetchLayout = () => {
	const queryParams = [
		'populate[header][populate][menuLinks][populate]=*',
		'populate[header][populate][headerLogo][populate]=*',
		'populate[footer][populate][menuLinks][populate]=*',
		'populate[footer][populate][footerLogo][populate]=*',
		'populate[footer][populate][policy][populate]=*',
		'populate[footer][populate][emailLink][populate]=*',
		'populate[footer][populate][footerSocialLinks][populate]=*',
	];
	return fetchResource('layout', queryParams);
};
