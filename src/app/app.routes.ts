import { Routes } from '@angular/router';
import { List } from './menu/list/list';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'menu', component: List },
];
