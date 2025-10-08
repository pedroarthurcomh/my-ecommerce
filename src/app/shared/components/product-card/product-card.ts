import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from 'src/app/services/products-service';

import { LucideAngularModule, MoveRight, Heart, HeartOff } from 'lucide-angular';
import { iProduct } from 'src/app/interfaces/product-interface';
import { NotificationService } from 'src/app/services/notification-service';
import { ProductCategoryLabels } from 'src/app/enums/product-categories-enum';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';
import { FavoritesService } from 'src/app/services/favorites-service';

@Component({
  selector: 'me-product-card',
  imports: [NzTypographyComponent, LucideAngularModule, CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  // Icons
  readonly moveRight = MoveRight;
  readonly heart = Heart;
  readonly heartOff = HeartOff;

  @Input() product!: iProduct;
  @Input() isFavorite?: boolean;

  public ProductCategoryLabels = ProductCategoryLabels;

  _productsService = inject(ProductsService);
  _favoritesService = inject(FavoritesService);
  _notificationService = inject(NotificationService);

  addToFavorites(product: iProduct): void {
    this._favoritesService.addOrRemoveFromFavorites(product);
  }
}
