import { BaseAPIModel } from './BaseAPIModel';

interface HeaderLink {
	id: number;
	label: string;
	href: string;
}

interface HeaderLogo {
	id: number;
	name: string;
	alternativeText: string | null;
	url: string;
	width: number;
	height: number;
}

interface ListLinks {
	id: number;
	links: HeaderLink[];
}

export interface Header {
	id: number;
	headerLogo: HeaderLogo;
	listLinks: ListLinks;
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

interface ListLinks {
	id: number;
	links: FooterLink[];
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
	listLinks: ListLinks;
	footerLogo: FooterLogo;
	policy: PolicyItem[];
	emailLink: EmailLink;
	footerSocialLinks: SocialLink[];
}

export interface Layout extends BaseAPIModel {
	header: Header;
	footer: Footer;
}
