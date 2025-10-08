import { Component, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class App implements OnInit {
  protected readonly title = signal('my-ecommerce');

  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  private _titleService = inject(Title);

  ngOnInit(): void {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this._activatedRoute;

          while (route.firstChild) {
            route = route.firstChild;
          }

          return route.snapshot.title;
        }),
      )
      .subscribe((title: string | undefined) => {
        if (title) this._titleService.setTitle(title);
        else this._titleService.setTitle('E-commerce');
      });
  }
}
