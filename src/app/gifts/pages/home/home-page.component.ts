import { Component } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';

@Component({
  selector: 'gifts-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private servicio: GiftsService) {}

  get giftList() {
    return this.servicio.gifts;
  }
}
