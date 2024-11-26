import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Gift,
  ISearchResponse,
} from '../components/interfaces/gift.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'Jv54lMCxyK6lbV7plxNzQPTKO2QISx6G';
  public gifts: Gift[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  public get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    if (tag.length == 0) return;

    if (this._tagsHistory.length == 10) {
      this._tagsHistory.pop();
    }

    this._tagsHistory = this._tagsHistory.filter((e) => e != tag);
  }

  saveLocalStorage(): void {
    localStorage.setItem('tagsHistory', JSON.stringify(this._tagsHistory));
  }

  loadLocalStorage(): void {
    if (!localStorage.getItem('tagsHistory')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('tagsHistory')!);
    if (this._tagsHistory.length == 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string): void {
    tag = tag.toLowerCase();
    this.organizeHistory(tag);

    this._tagsHistory.unshift(tag);

    this.saveLocalStorage();

    //haciendolo con fetch
    // fetch(
    //   `https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&q=${tag}&limit=10`
    // )
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    this.http
      .get<ISearchResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`
      )
      .subscribe((resp) => (this.gifts = resp.data));
  }
}
