import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

import { LucideAngularModule, Search, Moon, Sun, Heart, ShoppingCart  } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [NzBadgeModule, LucideAngularModule, FormsModule, RouterOutlet, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly search = Search;
  readonly moon = Moon;
  readonly sun = Sun;
  readonly heart = Heart;
  readonly cart = ShoppingCart;

  isDarkTheme = false;

  switchTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
