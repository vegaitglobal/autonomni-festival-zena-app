import { BaseAPIModel } from '@/types/apiModels/BaseAPIModel';

interface MenuLink {
	id: number;
	label: string;
	href: string;
}

interface MenuLinks {
	id: number;
	links: MenuLink[];
}

interface HeaderLogo {
	id: number;
	name: string;
	alternativeText: string | null;
	url: string;
	width: number;
	height: number;
}

export interface Header {
	id: number;
	headerLogo: HeaderLogo;
	menuLinks: MenuLinks;
}

interface FooterLink {
	id: number;
	label: string;
	href: string;
}

interface FooterLogo {
	id: number;
	name: string;
	alternativeText: string | null;
	url: string;
	width: number;
	height: number;
}

interface PolicyItem {
	id: number;
	label: string;
	file: string | null;
}

interface SocialLink {
	id: number;
	href: string;
	altText: string;
	socialNetwork: string;
}

interface EmailLink {
	id: number;
	label: string;
	href: string;
}

export interface Footer {
	id: number;
	footerTitle: string;
	footerSubtitle: string;
	menuLinks: MenuLinks;
	footerLogo: FooterLogo;
	policy: PolicyItem[];
	emailLink: EmailLink;
	footerSocialLinks: SocialLink[];
}

export interface Layout extends BaseAPIModel {
	header: Header;
	footer: Footer;
}
