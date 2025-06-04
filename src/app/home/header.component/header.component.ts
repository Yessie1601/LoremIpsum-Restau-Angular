import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  goToAboutUs() {
    this.router.navigate(['/about-us']);
  }

  openInfo() {
    window.open('https://www.dnsbelgium.be/nl/dit-helemaal-wat-ik-later-zou-willen-doen', '_blank', 'noopener');
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
