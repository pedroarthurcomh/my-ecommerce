import { Component } from '@angular/core';
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
export class DefaultLayout {
  readonly search = Search;
  readonly moon = Moon;
  readonly sun = Sun;
  readonly heart = Heart;
  readonly cart = ShoppingCart;
  readonly linkedin = Linkedin;
  readonly github = Github;
  readonly mail = Mail;

  isDarkTheme = false;

  switchTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
