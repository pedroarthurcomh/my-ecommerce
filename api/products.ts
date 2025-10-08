const path = require('path');
const fs = require('fs');

import type { VercelRequest, VercelResponse } from '@vercel/node';

module.exports = (request: VercelRequest, response: VercelResponse) => {
  try {
    const jsonFilePath = path.join(__dirname, '_data.json');
    const fileContents = fs.readFileSync(jsonFilePath, 'utf8');
    const jsonData = JSON.parse(fileContents);

    if (!jsonData.products) {
      throw new Error("A chave 'products' não foi encontrada no arquivo _data.json.");
    }

    const { category, id } = request.query;
    let products = jsonData.products;

    if (id && !Array.isArray(id)) {
      const product = products.find((p: any) => p.id === id);
      if (product) {
        return response.status(200).json(product);
      }
      return response.status(404).json({ error: 'Product not found' });
    }

    if (category && typeof category === 'string') {
      products = products.filter((p: any) => p.category === category);
    }

    return response.status(200).json(products);
  } catch (error: any) {
    console.error('ERRO NA FUNÇÃO SERVERLESS:', error);
    return response
      .status(500)
      .json({ message: 'Ocorreu um erro no servidor.', details: error.message });
  }
};
