import { Component } from '@angular/core';
import { HeroComponent } from './hero.component/hero.component';
import { InfoComponent } from './info.component/info.component';
import { MenuComponent } from './menu.component/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, InfoComponent, MenuComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
