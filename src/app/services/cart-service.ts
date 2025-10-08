import { inject, Injectable, signal } from '@angular/core';
import { iCartProduct } from '../interfaces/cart-product-interface';
import { NotificationService } from './notification-service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public _cartItems = signal<iCartProduct[]>([]);

  public _notificationService = inject(NotificationService);

  // ADD
  addToCart(product: iCartProduct) {
    let storagedItems = localStorage.getItem('cart') || '[]';
    let storage = JSON.parse(storagedItems);

    this._cartItems.update((items) => {
      const existedItem = items.find((item) => item.id === product.id);

      if (existedItem) {
        // SE O PRODUTO JÁ ESTIVER NO CARRINHO, ATUALIZA A QUANTIDADE
        storage = storage.map((item: any) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item,
        );

        const newStorage = JSON.stringify(storage);
        localStorage.setItem('cart', newStorage);

        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item,
        );
      } else {
        // SE NÃO ESTIVER O CARRINHO, ADICIONA
        const newItem = product;
        const newStorage = JSON.stringify([...storage, newItem]);
        localStorage.setItem('cart', newStorage);
        return [...items, newItem];
      }
    });
  }

  // UPDATE
  updateQuantity(id: string, operator: string) {
    let storagedItems = localStorage.getItem('cart') || '[]';
    let storage = JSON.parse(storagedItems);

    this._cartItems.update((items) => {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          const newQuantity = operator === '+' ? item.quantity + 1 : Math.max(1, item.quantity - 1);

          storage = storage.map((item: any) =>
            item.id === id ? { ...item, quantity: newQuantity } : item,
          );

          return { ...item, quantity: newQuantity };
        }

        return item;
      });

      const newStorage = JSON.stringify(storage);
      localStorage.setItem('cart', newStorage);

      return updatedItems;
    });
  }

  // DELETE
  deleteCartItem(id: string) {
    let storagedItems = localStorage.getItem('cart') || '';
    let storage = JSON.parse(storagedItems);

    storage = JSON.stringify(storage.filter((item: any) => item.id != id));
    localStorage.setItem('cart', storage);

    this._cartItems.update((items) => {
      return items.filter((item) => item.id != id);
    });
  }

  clearCart() {
    this._cartItems.set([]);
    localStorage.setItem('cart', '[]');
    this._notificationService.success('Carrinho limpo com sucesso!');
  }
}
