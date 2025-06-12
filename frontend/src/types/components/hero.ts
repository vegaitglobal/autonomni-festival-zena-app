export interface HeroComponent {
  id: number;
  title: string;
  backgroundImage: {
    id: number;
    url: string;
    alternativeText?: string;
  };
  ctaLink: string;
}