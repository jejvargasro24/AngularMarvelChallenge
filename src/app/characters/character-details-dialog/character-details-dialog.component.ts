import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComicDialogComponent } from 'src/app/comics/comic-dialog/comic-dialog.component';
import { Character } from 'src/app/commonServices/models/character.model';
import { Comic } from 'src/app/commonServices/models/comic.model';
import { ComicApiService } from 'src/app/commonServices/services/comic-api.service';
import { EventApiService } from 'src/app/commonServices/services/event-api.service';
import { SeriesApiService } from 'src/app/commonServices/services/series-api.service';
import { StoryApiService } from 'src/app/commonServices/services/story-api.service';
import { SharedDetailsDialogComponent } from 'src/app/commonServices/shared-details-dialog/shared-details-dialog.component';

@Component({
  selector: 'app-character-details-dialog',
  templateUrl: './character-details-dialog.component.html',
  styleUrls: ['./character-details-dialog.component.css']
})
export class CharacterDetailsDialogComponent implements OnInit {



  constructor(public dialog: MatDialog
              ,private comicsService : ComicApiService
              ,private storyService : StoryApiService
              ,private eventService : EventApiService
              ,private seriesService : SeriesApiService
              ,@Inject(MAT_DIALOG_DATA) public data: Character) { }

  ngOnInit(): void {
  }

  getComicData(comicName: string){
    let comicURI: string = this.data.comics.items.filter(cs => cs.name === comicName)[0].resourceURI;
    this.comicsService.getComic(comicURI).subscribe(comics => {
      if(comics[0]){
        this.openComicDialog(comics[0]);
      }
    });
  }

  openComicDialog(comic: Comic){
    this.dialog.open(ComicDialogComponent, {
      disableClose: false,
      width: "500px",
      data: comic
    });
  }

  openSharedDetailsComponent(templateId: number, entityName:string){
    switch (templateId) {
      case 1:
        this.getStoryData(entityName);
        break;
      case 2:
        this.getEventData(entityName);
        break;
      case 3:
        this.getSeriesData(entityName);
        break;
      default:
        break;
    }
  }


  getStoryData(storyName: string){
    let storyURI: string = this.data.stories.items.filter(s => s.name === storyName)[0].resourceURI;
    this.storyService.getStory(storyURI).subscribe(stories =>{
      if(stories[0]){
        this.openSharedDialog(1, stories[0]);
      }
    });
  }

  getEventData(eventName: string){
    let eventURI: string = this.data.events.items.filter(s => s.name === eventName)[0].resourceURI;
    this.eventService.getEvent(eventURI).subscribe(events => {
      if(events[0]){
        this.openSharedDialog(2, events[0]);
      }
    });
  }

  getSeriesData(seriesName: string){
    let seriesURI: string = this.data.series.items.filter(s => s.name === seriesName)[0].resourceURI;
    this.seriesService.getSeries(seriesURI).subscribe(series => {
      if (series[0]) {
        this.openSharedDialog(3, series[0]);
      }
    });
  }

  openSharedDialog(templateId: number, entity: any){
    this.dialog.open(SharedDetailsDialogComponent, {
      disableClose: false,
      width: "500px",
      data: {
        templateId: templateId,
        entity: entity
      }
    });
  }

}
