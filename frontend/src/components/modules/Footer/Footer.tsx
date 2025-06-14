'use client';

import Link from 'next/link';
import Image from 'next/image';
import Up from '@/assets/up.svg';
import BrushEmail from '@/assets/brush-email.svg';
import FacebookIcon from '@/assets/facebook.svg';
import InstagramIcon from '@/assets/instagram.svg';
import { Footer as FooterModel } from '@/types/apiModels/Layout';
import './Footer.scss';

interface FooterProps {
	footer: FooterModel;
}

export default function Footer({ footer }: FooterProps) {
	const currentYear = new Date().getFullYear();

	if (!footer) {
		console.error('Footer data not found in layout');
		return null;
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const getSocialIcon = (socialNetwork: string) => {
		switch (socialNetwork) {
			case 'facebook':
				return FacebookIcon;
			case 'instagram':
				return InstagramIcon;
			default:
				return null;
		}
	};

	return (
		<footer className="footer" id="contact">
			<div className="wrap">
				<div className="footer__black-bg">
					<span className="sr-only">Footer background</span>
				</div>
			</div>

			<div className="footer__container">
				<div className="footer__top">
					<div className="wrap">
						<div className="footer__top-cols">
							<div className="footer__top-col footer__align-right footer__top-col--logo">
								{footer.footerLogo && (
									<Link href="/" className="footer__img-logo-link">
										<Image
											className="footer__img-logo"
											src={`${process.env.NEXT_PUBLIC_API_MEDIA_URL}${footer.footerLogo.url}`}
											alt={footer.footerLogo.alternativeText || 'Footer Logo'}
											width={footer.footerLogo.width}
											height={footer.footerLogo.height}
										/>
									</Link>
								)}
							</div>

							<div className="footer__top-col footer__top-col--links">
								<div className="footer__top-links">
									{footer.listLinks?.links?.map((link) => (
										<Link key={link.id} className="footer__top-link" href={link.href}>
											{link.label}
										</Link>
									))}
								</div>
								<button
									onClick={scrollToTop}
									className="footer__scroll-top-btn"
									aria-label="Scroll to top"
								>
									<Image
										className="footer__scroll-top-btn-img"
										src={Up}
										alt="Scroll to top"
										width={138}
										height={178}
									/>
								</button>
							</div>
						</div>

						<div className="footer__bottom-cols">
							<div className="footer__bottom-col">
								{footer.policy?.map((policyItem) => (
									<Link
										key={policyItem.id}
										className="footer__link-text"
										href={policyItem.file || '#'}
									>
										{policyItem.label}
									</Link>
								))}
							</div>

							<div className="footer__bottom-col footer__align-right">
								<span className="footer__small-text">
									Design by{' '}
									<Link
										className="footer__link-text"
										href="#"
										target="_blank"
										rel="noopener noreferrer"
									>
										Elder
									</Link>
								</span>
								<span className="footer__copy">
									© {currentYear} All rights reserved
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="footer__bottom">
					<div className="wrap">
						<div className="footer__bottom-in">
							<div className="footer__bottom-details">
								{footer.footerTitle && (
									<h3 className="footer__title">{footer.footerTitle}</h3>
								)}

								{footer.footerSubtitle && (
									<p className="footer__paragraph">{footer.footerSubtitle}</p>
								)}

								<span className="footer__mail-in">
									<Image className="" src={BrushEmail} alt="Scroll to top" fill />
									<Link
										href={
											footer.emailLink.href.startsWith('mailto:')
												? footer.emailLink.href
												: `mailto:${footer.emailLink.href}`
										}
										className="footer__mail"
									>
										{footer.emailLink.label}
									</Link>
								</span>

								<ul className="footer__social">
									{footer.footerSocialLinks?.map((social) => {
										const IconComponent = getSocialIcon(social.socialNetwork);

										return (
											<li key={social.id} className="footer__social-item">
												<Link
													href={
														social.href.startsWith('http')
															? social.href
															: `https://${social.href}`
													}
													className="footer__social-link"
													aria-label={social.altText}
													target="_blank"
													rel="noopener noreferrer"
												>
													{IconComponent && (
														<Image
															src={IconComponent}
															alt={social.altText}
															width={80}
															height={80}
															className="footer__social-icon"
														/>
													)}
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
