export interface iProduct {
  id: string;
  name: string;
  description: string;
  image_url: string;
  category: 't-shirts' | 'mugs' | 'accessories';
  sizes: string[];
  colors: string[];
  price: number;
  originalPrice: number;
  sales: number;
  created_at?: string;
}
