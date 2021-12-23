import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComicDialogComponent } from 'src/app/comics/comic-dialog/comic-dialog.component';

import { Character } from 'src/app/commonServices/models/character.model';
import { Comic } from 'src/app/commonServices/models/comic.model';
import { ComicSumary } from 'src/app/commonServices/models/comicSumary.model';
import { ComicApiService } from 'src/app/commonServices/services/comic-api.service';
import { CharacterDetailsDialogComponent } from '../character-details-dialog/character-details-dialog.component';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character;
  comicsList: ComicSumary[] = new Array<ComicSumary>();
  hasComics: boolean = false;

  constructor(public dialog: MatDialog,
              private comicsService : ComicApiService) { }

  ngOnInit(): void {
    this.setComicsList(this.character.comics.items);
    this.hasComics = this.comicsList.length > 0;
  }

  setComicsList(comicList: ComicSumary[]): void{
    for (let  i = 0; i < 4; i++) {
      const comicSumaryItem = comicList[i];
      if(comicSumaryItem){
        this.comicsList.push(comicSumaryItem);
      }
    }
  }

  getComicData(comicName: string){
    let comicURI: string = this.comicsList.filter(cs => cs.name === comicName)[0].resourceURI;
    this.comicsService.getComic(comicURI).subscribe(comics => {
      if(comics[0]){
        this.openComicDialog(comics[0]);
      }
    });
  }

  openComicDialog(comic: Comic){
    this.dialog.open(ComicDialogComponent, {
      disableClose: false,
      maxHeight : "700px",
      width: "500px",
      data: comic
    });
  }


  openCharacterDetailsDialog(){
    this.dialog.open(CharacterDetailsDialogComponent, {
      disableClose: false,
      width: "950px",
      data: this.character
    });
  }

}
