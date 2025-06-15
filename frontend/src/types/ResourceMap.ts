import { HomePage } from '@/types/apiModels/HomePage';
import { Layout } from '@/types/apiModels/Layout';
import { NotFoundPage } from '@/types/apiModels/NotFound';
import { Program } from '@/types/apiModels/Program';
import { AboutUsPage } from '@/types/apiModels/AboutUsPage';
import { ContactPage } from '@/types/apiModels/ContactPage';

export interface ApiResourcesMap {
	'home-page': HomePage;
	'about-us-page': AboutUsPage;
	'not-found-page': NotFoundPage;
	'contact-page': ContactPage;
	programs: Program[];
	layout: Layout;
}
