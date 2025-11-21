export interface SerpApiSearchResult {
  title: string;
  link: string;
  snippet?: string;
  displayed_link?: string;
  favicon?: string;
  thumbnail?: string;
}

export interface SerpApiImageResult {
  original: string;
  thumbnail: string;
  title: string;
  link: string;
  source: string;
}

export interface SerpApiResponse {
  searchMetadata?: {
    id: string;
    status: string;
    total_time_taken?: number;
  };
  searchInformation?: {
    totalResults?: string;
  };
  organic_results?: SerpApiSearchResult[];
  inline_images?: SerpApiImageResult[];
  images_results?: SerpApiImageResult[];
  error?: string;
}
