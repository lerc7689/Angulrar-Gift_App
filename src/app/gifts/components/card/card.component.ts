import { Component, Input, OnInit } from '@angular/core';
import { Gift } from '../interfaces/gift.interfaces';

@Component({
  selector: 'gifts-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input()
  public singleGift!: Gift;

  public isImgLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.singleGift) throw new Error('El gif es requerido amigoooo');
  }

  onLoadingImage(): void {
    console.log('Imagen cargada');

    //espera un segundo para mostrar la imagen para poder apreciar el loading, solo es para verlo
    setTimeout(() => {
      this.isImgLoaded = true;
    }, 1000);
  }
}
