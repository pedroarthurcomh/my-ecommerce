import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ProductsService } from 'src/app/services/products-service';

import { LucideAngularModule, MoveRight, Heart } from 'lucide-angular';
import { iProduct } from 'src/app/interfaces/product-interface';
import { NotificationService } from 'src/app/services/notification-service';
import { ProductCategoryLabels } from 'src/app/enums/product-categories-enum';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';

@Component({
  selector: 'me-product-card',
  imports: [NzTypographyComponent, RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  // Icons
  readonly moveRight = MoveRight;
  readonly heart = Heart;

  @Input() product!: iProduct;
  @Input() isFavorite?: boolean;

  public ProductCategoryLabels = ProductCategoryLabels;

  _productsService = inject(ProductsService);
  _notificationService = inject(NotificationService);

  addToFavorites(product: iProduct): void {
    //TODO: add product to Favorites List
    this._notificationService.success('Adicionado aos favoritos!');
  }
}
