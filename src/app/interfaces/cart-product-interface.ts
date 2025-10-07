export interface iCartProduct {
  id: string;
  name: string;
  image_url: string;
  category: 't-shirts' | 'mugs' | 'accessories';
  size: string;
  color: string;
  price: number;
  quantity: number;
}