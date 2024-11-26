import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';

@Component({
  selector: 'gifts-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private servicio: GiftsService) {}
  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    console.log(newTag);
    this.servicio.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
