import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic } from 'src/app/commonServices/models/comic.model';

@Component({
  selector: 'app-comic-favorites-item',
  templateUrl: './comic-favorites-item.component.html',
  styleUrls: ['./comic-favorites-item.component.css']
})
export class ComicFavoritesItemComponent implements OnInit {

 @Input() comic: Comic;
 @Output() popComicEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  popComicFromFavorites(id: number){
    this.popComicEvent.emit(id);
  }

}
