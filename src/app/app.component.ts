import { Component } from '@angular/core';
enum THEMES { "light", "dark"};
  
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

    for (const theme in this.themes) {
      bodyTag.classList.remove(theme);      
    }
    bodyTag.classList.add(THEMES[theme]);
  }
}
