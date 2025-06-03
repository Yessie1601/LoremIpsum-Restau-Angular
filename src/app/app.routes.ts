import { Routes } from '@angular/router';
import { List } from './menu/list/list';
import { Home } from './home/home';
import { Summary } from './about-us/summary/summary';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'menu', component: List },
  { path: 'about-us', component: Summary },
];
