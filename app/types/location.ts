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
