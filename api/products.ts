
import type { VercelRequest, VercelResponse } from '@vercel/node';
import productsData from './_data.json';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {

  const { category, id } = request.query;

  let products = productsData.products;

  if (id) {
    const product = products.find((p) => p.id === id);
    if (product) {
      return response.status(200).json(product);
    }
    return response.status(404).json({ error: 'Product not found' });
  }


  if (category && typeof category === 'string') {
    products = products.filter((p) => p.category === category);
  }


  response.status(200).json(products);
}