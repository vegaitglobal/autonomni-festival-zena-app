export type StrapiFile = {
  alternativeText: string | null;
  caption: string | null;
  createdAt: string; // ISO datetime
  documentId: string;
  ext: string | null;
  formats: unknown | null; // could be more detailed if you know the structure
  hash: string;
  height: number | null;
  id: number;
  mime: string;
  name: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null; // same here, could expand if needed
  publishedAt: string; // ISO datetime
  size: number;
  updatedAt: string; // ISO datetime
  url: string;
  width: number | null;
};
