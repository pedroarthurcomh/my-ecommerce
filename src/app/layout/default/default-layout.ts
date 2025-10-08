import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import {
  LucideAngularModule,
  Search,
  Moon,
  Sun,
  Heart,
  ShoppingCart,
  Linkedin,
  Github,
  Mail,
} from 'lucide-angular';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';
import { CartService } from 'src/app/services/cart-service';
import { FavoritesService } from 'src/app/services/favorites-service';
import { ThemeService } from 'src/app/services/theme-service';

@Component({
  selector: 'app-default-layout',
  imports: [
    NzBadgeModule,
    NzDividerModule,
    LucideAngularModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    NzTypographyComponent,
  ],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.scss',
})
export class DefaultLayout implements OnInit {
  readonly search = Search;
  readonly moon = Moon;
  readonly sun = Sun;
  readonly heart = Heart;
  readonly cart = ShoppingCart;
  readonly linkedin = Linkedin;
  readonly github = Github;
  readonly mail = Mail;

  _cartService = inject(CartService);
  _favoritesService = inject(FavoritesService);
  public _themeService = inject(ThemeService);

  public cartQuantity = computed(() => {
    return this._cartService._cartItems().length;
  });

  isDarkTheme = false;

  toggleTheme(): void {
    this._themeService.toggleTheme();
    this.isDarkTheme = !this.isDarkTheme;
  }

  ngOnInit(): void {
    this.initiateLocalStorage();
    this.initiateFavoritesStorage();
  }

  initiateLocalStorage() {
    const existedCart = localStorage.getItem('cart');

    if (existedCart) {
      this._cartService._cartItems.set(JSON.parse(existedCart));
    } else {
      localStorage.setItem('cart', '[]');
    }
  }

  initiateFavoritesStorage() {
    const existedFavorites = localStorage.getItem('favorites');

    if (existedFavorites) {
      this._favoritesService._favoriteItems.set(JSON.parse(existedFavorites));
    } else {
      localStorage.setItem('favorites', '[]');
    }
  }
}
