import { HeroComponent } from "../components/hero";

export interface HomePage {
  id: number;
  documentId: string;
  Title: string;

  Hero?: HeroComponent;
  // Metadata
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}