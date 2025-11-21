export type SearchType = 'web' | 'image';

export interface SearchOptions {
  query: string;
  apiKey: string;
  type: SearchType;
  dateRestrict?: string;
  siteSearch?: string;
  language: string;
  page: number;
}
