'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header as HeaderModel } from '@/types/apiModels/Layout';
import './Header.scss';

interface HeaderProps {
	header: HeaderModel;
}

export default function Header({ header }: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

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
