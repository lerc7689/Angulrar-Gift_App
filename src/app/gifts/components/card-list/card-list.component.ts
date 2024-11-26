import { Component, input, Input } from '@angular/core';
import { Gift } from '../interfaces/gift.interfaces';
// import { GiftsService } from '../../services/gifts.service';
// import { Gift } from '../interfaces/gift.interfaces';

@Component({
  selector: 'gifts-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {
  @Input() giftList!: Gift[];
}
