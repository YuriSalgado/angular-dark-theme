import { Component } from '@angular/core';
enum THEMES { "dark" };
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-dark-theme';
  themes = THEMES;

  setThemeClass(theme:THEMES) {
    const bodyTag = document.body;

    bodyTag.classList.toggle(THEMES[theme]);
  }
}
