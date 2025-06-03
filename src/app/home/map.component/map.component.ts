import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

type LatLngLiteral = google.maps.LatLngLiteral;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true,
  imports: [GoogleMapsModule]
})
export class MapComponent {
  zoom = 16;
  center: LatLngLiteral = { lat: 50.9171, lng: 3.3932 };
  markerOptions = { draggable: false };
  markerPosition: LatLngLiteral = this.center;
}
