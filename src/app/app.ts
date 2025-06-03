import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './home/header.component/header.component';
import { FooterComponent } from './home/footer.component/footer.component';
import { MapComponent } from './home/map.component/map.component';
import { BarComponent } from './home/bar.component/bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MapComponent, BarComponent],
  templateUrl: './app.html'
})
export class App {}
