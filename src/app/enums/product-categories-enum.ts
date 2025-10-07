export enum eProductCategories {
  ALL = 'all',
  TSHIRTS = 't-shirts',
  MUGS = 'mugs',
  ACCESSORIES = 'accessories'
}

export const ProductCategoryLabels: Readonly<Record<eProductCategories, string>> = Object.freeze({
  [eProductCategories.ALL]: 'Todos',
  [eProductCategories.TSHIRTS]: 'Camisetas',
  [eProductCategories.MUGS]: 'Canecas',
  [eProductCategories.ACCESSORIES]: 'Acessórios',
});

