import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { LucideAngularModule, Heart } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { FavoritesService } from 'src/app/services/favorites-service';
import { ProductCard } from '@shared/components/product-card/product-card';

@Component({
  selector: 'app-favorites',
  imports: [LucideAngularModule, NzTypographyModule, RouterLink, CommonModule, ProductCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {
  readonly heart = Heart;

  _favoritesService = inject(FavoritesService);

  favoriteItems = computed(() => {
    return this._favoritesService._favoriteItems();
  });
}
