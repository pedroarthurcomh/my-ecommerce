import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LucideAngularModule, Search, Moon, Heart, ShoppingCart  } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, FormsModule, NzButtonModule, NzInputModule, NzIconModule, RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly search = Search;
  readonly moon = Moon;
  readonly heart = Heart;
  readonly cart = ShoppingCart;
}
