export type Location = {
  slug: string;
  hotel_id: number;
  name: string;
  description: string | null;
  address: string;
  latitude: number | null;
  longitude: number | null;
  city: string;
  state: string;
  country: string;
  is_active: boolean;
  imageUrl?: string;
  rating?: number;
  pricePerNight?: number;
};

export type LocationsApiResponse = {
  items: Location[];
  total: number;
  page: number;
  page_size: number;
};

export type LocationHost = {
  name: string;
  avatarUrl?: string;
};

export type LocationReview = {
  author: string;
  date: string;
  text: string;
  avatarUrl?: string;
};

export type LocationDetail = Location & {
  images?: string[];
  host?: LocationHost;
  reviewCount?: number;
  reviews?: LocationReview[];
  amenities?: string[];
  cleaningFee?: number;
  serviceFee?: number;
};
