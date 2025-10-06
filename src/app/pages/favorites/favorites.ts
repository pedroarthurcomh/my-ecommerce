import { Component } from '@angular/core';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { LucideAngularModule, Heart } from 'lucide-angular';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [LucideAngularModule, NzTypographyModule, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {
  readonly heart = Heart;
  cartItems: string[] = [];
}
