import { Component } from '@angular/core';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { LucideAngularModule, ShoppingBag } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [LucideAngularModule, NzTypographyModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  readonly bag = ShoppingBag;
}
