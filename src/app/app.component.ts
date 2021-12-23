import { Component, OnInit } from '@angular/core';
import { CharacterApiService } from './commonServices/services/character-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'marvelChallenge';

  constructor(private charactersService : CharacterApiService){}

  ngOnInit(){

  }

}
