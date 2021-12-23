import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

import { Character } from 'src/app/commonServices/models/character.model';
import {CharactersFilterParameter}  from 'src/app/commonServices/models/charactersFilter-parameter.model';
import {Options}  from 'src/app/commonServices/models/options.model';

import { CharacterApiService } from 'src/app/commonServices/services/character-api.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  charactersList: Character[];
  size: number = 10;
  page: number = 0;
  totalLength: number = 0;

  charactersFilterParameter = new CharactersFilterParameter();

  charactersOrderByOptions: Options[] = [
    { id: 1, description: "Name Ascendent" },
    { id: 2, description: "Name Descendent" },
    { id: 3, description: "Creation Date Ascendent"},
    { id: 4, description: "Creation Date Descendent"}
  ];

  charactersFilterByOptions: Options[] = [
    { id: 1, description: "Full Name" },
    { id: 2, description: "Name Starts With" }
  ];


  stringOrderByNameAsc: string = "name";
  stringOrderByNameDesc: string = "-name";
  stringOrderByCreationDateAsc: string = "modified";
  stringOrderByCreationDateDesc: string = "-modified";
  orderBySelectedOption: string;

  paramFilterByNameStartsWith: string = "nameStartsWith";
  paramFilterByFullName: string = "name";
  filterBySelectedParam: string;
  filterByInputLabel: string;
  showFilterByTextInput : boolean = false;
  filterByTextValue: string = '';

  constructor(private charactersService : CharacterApiService) { }

  ngOnInit(){
    this.charactersFilterParameter.orderBy = this.stringOrderByNameAsc;
    this.charactersFilterParameter.limit = this.size;
    this.charactersFilterParameter.offset = this.page;
    this.orderBySelectedOption = this.stringOrderByNameAsc;
    this.getAvailableCharactersCount();
    this.getCharacters();
  }

  getCharacters(){
    this.charactersService.getCharacters(this.charactersFilterParameter).subscribe(data =>{
      this.charactersList = data;
    });
  }

  getAvailableCharactersCount(){
    this.charactersService.getAvailableCharactersCount(this.charactersFilterParameter).subscribe(data =>{
      this.totalLength = data;
    });
  }

  changePageParameters(page: PageEvent) {
    this.charactersFilterParameter.limit = page.pageSize;
    this.charactersFilterParameter.offset = page.pageSize * page.pageIndex;
    this.getCharacters();
  }

  orderCharacters(id: number){
    switch (id){
      case 1:
        this.charactersFilterParameter.orderBy = this.stringOrderByNameAsc;
        this.orderBySelectedOption = this.stringOrderByNameAsc;
        this.getCharacters();
         break;
      case 2:
        this.charactersFilterParameter.orderBy = this.stringOrderByNameDesc;
        this.orderBySelectedOption = this.stringOrderByNameDesc;
        this.getCharacters();
          break;
      case 3:
        this.charactersFilterParameter.orderBy = this.stringOrderByCreationDateAsc;
        this.orderBySelectedOption = this.stringOrderByCreationDateAsc;
        this.getCharacters();
        break;
      case 4:
        this.charactersFilterParameter.orderBy = this.stringOrderByCreationDateDesc;
        this.orderBySelectedOption = this.stringOrderByCreationDateDesc;
        this.getCharacters();
        break;
      default:
        this.charactersFilterParameter.orderBy = this.stringOrderByNameAsc;
        this.orderBySelectedOption = this.stringOrderByNameAsc;
        this.getCharacters();
        break;
    }
  }

  SetFilterByParameter(id: number){
    switch (id){
      case 1:
        this.charactersFilterParameter.filterByParameter = this.paramFilterByFullName;
        this.filterByInputLabel = this.GetOptionDescription(this.charactersFilterByOptions, id);
        this.showFilterByTextInput = true;
         break;
      case 2:
        this.charactersFilterParameter.filterByParameter = this.paramFilterByNameStartsWith;
        this.filterByInputLabel = this.GetOptionDescription(this.charactersFilterByOptions, id);
        this.showFilterByTextInput = true;
          break;
      default:
        this.charactersFilterParameter.filterByParameter = '';
        this.orderBySelectedOption = this.stringOrderByNameAsc;
        break;
    }
  }

  GetOptionDescription(array: Options[], id: number): string{
    return array.filter(op => op.id === id)[0].description;
  }

  FilterCharacters(){
    this.charactersFilterParameter.filterByValue = this.filterByTextValue;
    this.charactersFilterParameter.offset = 0;
    this.getCharacters();
    this.getAvailableCharactersCount();
  }


}
