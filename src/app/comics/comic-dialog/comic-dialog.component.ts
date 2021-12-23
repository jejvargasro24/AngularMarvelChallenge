import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Comic } from 'src/app/commonServices/models/comic.model';
import { ComicsFavoritesListDataService } from 'src/app/commonServices/services/comics-favorites-list-data.service';

@Component({
  selector: 'app-comic-dialog',
  templateUrl: './comic-dialog.component.html',
  styleUrls: ['./comic-dialog.component.css']
})
export class ComicDialogComponent implements OnInit {

  comicsList: Comic[] = new Array<Comic>();
  comicsListChanged: Subscription;
  comicInFavorites: boolean = false;

  constructor(public dialog: MatDialog
              ,private comicsFavoritesListDataService: ComicsFavoritesListDataService
              ,@Inject(MAT_DIALOG_DATA) public data: Comic) { }

  ngOnInit(): void {
    this.comicsListChanged = this.comicsFavoritesListDataService.comicsListChanged$.subscribe(comicsFavList => this.comicsList = comicsFavList);
    this.checkIfComicInFavorites();
  }

  addToFavorites(){
    this.comicsFavoritesListDataService.addComicToList(this.data).subscribe(() => {
      this.comicInFavorites = true;
    });
  }

  removeFromFavorites(){
    this.comicsFavoritesListDataService.popComicFromList(this.data.id);
    this.comicInFavorites = false;
  }

  checkIfComicInFavorites(){
    let comicIndex = this.comicsList.findIndex(c => c.id === this.data.id);
    this.comicInFavorites = comicIndex > -1 ? true : false;
  }

}
