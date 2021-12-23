import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CharacterCardComponent } from './characters/character-card/character-card.component';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { ComicDialogComponent } from './comics/comic-dialog/comic-dialog.component';
import { ComicsFavoritesListComponent } from './comics/comics-favorites-list/comics-favorites-list.component';
import { ComicFavoritesItemComponent } from './comics/comic-favorites-item/comic-favorites-item.component';
import { CharacterDetailsDialogComponent } from './characters/character-details-dialog/character-details-dialog.component';
import { SharedDetailsDialogComponent } from './commonServices/shared-details-dialog/shared-details-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    CharactersListComponent,
    ComicDialogComponent,
    ComicsFavoritesListComponent,
    ComicFavoritesItemComponent,
    CharacterDetailsDialogComponent,
    SharedDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
