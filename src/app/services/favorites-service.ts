import { computed, inject, Injectable, signal } from '@angular/core';
import { NotificationService } from './notification-service';
import { iProduct } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  public _favoriteItems = signal<iProduct[]>([]);
  public isFavoriteComputed = computed(() => (id: string) => {
    return this._favoriteItems().some(item => item.id === id)
  })

  public _notificationService = inject(NotificationService);

  addOrRemoveFromFavorites(product: iProduct) {
    let storagedFavorites = localStorage.getItem('favorites') || '[]';
    let favorites = JSON.parse(storagedFavorites);

    this._favoriteItems.update((items: any) => {
      const existedItem = items.find((item: any) => item.id === product.id);

      if (!existedItem) {
        const newFavorites = JSON.stringify([...favorites, product]);
        localStorage.setItem('favorites', newFavorites);

        this._notificationService.success('Adicionado aos favoritos!');

        return [...items, product];
      }

      favorites = JSON.stringify(items.filter((item: any) => item.id != product.id));
      localStorage.setItem('favorites', favorites);

      this._notificationService.success('Removido dos favoritos!');

      return items.filter((item: any) => item.id != product.id);
    });
  }
}
