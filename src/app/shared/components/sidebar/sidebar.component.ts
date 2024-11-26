import { Component } from '@angular/core';
import { GiftsService } from '../../../gifts/services/gifts.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private servicio: GiftsService) {}

  public get tags() {
    return this.servicio.tagsHistory;
  }

  public searchTag(tag: string): void {
    this.servicio.searchTag(tag);
  }
}
