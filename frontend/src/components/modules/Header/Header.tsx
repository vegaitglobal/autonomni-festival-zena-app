'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.scss';

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

interface Header {
	id: number;
	headerLogo: HeaderLogo;
	listLinks: ListLinks;
}

interface Layout {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	header: Header;
}

interface HeaderProps {
	layout: Layout;
}

export default function Header({ layout }: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const header = layout?.header;
	const headerLogo = header?.headerLogo;
	const listLinks = header?.listLinks;

	if (!header) {
		console.error('Header data not found in layout');
		return null;
	}

	return (
		<header className={`header ${isMenuOpen ? 'header--opened' : ''}`}>
			<div className="wrap">
				<div className="header__container">
					{headerLogo && (
						<Link href="/" className="header__home" onClick={closeMenu}>
							<Image
								className="header__logo"
								src={`${process.env.NEXT_PUBLIC_API_MEDIA_URL}${headerLogo.url}`}
								alt={headerLogo.alternativeText || 'Logo'}
								width={headerLogo.width}
								height={headerLogo.height}
								priority
							/>
						</Link>
					)}

					<button
						className="header__hamburger"
						type="button"
						onClick={toggleMenu}
						aria-expanded={isMenuOpen}
						aria-label="Toggle menu"
					>
						<span className="header__hamburger-line" aria-hidden="true"></span>
						<span className="sr-only">Toggle menu</span>
					</button>

					{listLinks?.links && (
						<nav className="nav">
							<img src="" alt="" />
							<ul className="nav__list" role="menubar">
								{listLinks.links.map((link) => (
									<li key={link.id} className="nav__item" role="menuitem">
										<Link className="nav__link" href={link.href} onClick={closeMenu}>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					)}
				</div>
			</div>
		</header>
	);
}
