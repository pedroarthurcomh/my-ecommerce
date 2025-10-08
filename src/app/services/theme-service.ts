import { isPlatformBrowser } from '@angular/common';
import { effect, Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme === 'dark') {
        this.isDarkMode.set(true);
      } else if (savedTheme === 'light') {
        this.isDarkMode.set(false);
      } else {
        this.isDarkMode.set(false);
      }

      effect(() => {
        if (this.isDarkMode()) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      });
    }
  }

  // Método para alternar o tema
  toggleTheme() {
    this.isDarkMode.update(value => !value);
  }
}
