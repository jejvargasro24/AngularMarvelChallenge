import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Comic } from '../models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsFavoritesListDataService {

  favoriteComicsList: Comic[] = new Array<Comic>();

  constructor() { }
  //Cambiar a behaviorSubject para que el dialog del comic pueda saber si el comic ya estaba en la lista de favoritos.
  private comicsListSubject$ = new BehaviorSubject<Comic[]>(this.favoriteComicsList);
  comicsListChanged$ = this.comicsListSubject$.asObservable();

  addComicToList(comic: Comic): Observable<Comic[]>{
    this.favoriteComicsList.push(comic);
    this.comicsListSubject$.next(this.favoriteComicsList);
    return of(this.favoriteComicsList);
  }

  popComicFromList(id: number): void{
    let comicIndex = this.favoriteComicsList.findIndex(c => c.id === id);
    if(comicIndex > -1){
      this.favoriteComicsList.splice(comicIndex, 1);
    }
    this.comicsListSubject$.next(this.favoriteComicsList);
  }

}
