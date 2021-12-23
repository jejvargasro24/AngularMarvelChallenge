import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Comic } from 'src/app/commonServices/models/comic.model';
import { ComicsFavoritesListDataService } from 'src/app/commonServices/services/comics-favorites-list-data.service';

@Component({
  selector: 'app-comics-favorites-list',
  templateUrl: './comics-favorites-list.component.html',
  styleUrls: ['./comics-favorites-list.component.css']
})
export class ComicsFavoritesListComponent implements OnInit {

  comicsList: Comic[] = new Array<Comic>();
  comicsListChanged: Subscription;

  constructor(private comicsFavoritesListDataService: ComicsFavoritesListDataService) { }

  ngOnInit(): void {
    this.comicsListChanged = this.comicsFavoritesListDataService.comicsListChanged$.subscribe(comicsFavList => this.comicsList = comicsFavList);
  }

  popComicFromList(id: number){
    this.comicsFavoritesListDataService.popComicFromList(id);
  }

}
