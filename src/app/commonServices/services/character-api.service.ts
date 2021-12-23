import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { Character } from '../models/character.model';
import { DataWrapper } from '../models/dataWrapper.model';
import {CharactersFilterParameter}  from 'src/app/commonServices/models/charactersFilter-parameter.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterApiService{
  private baseUrl = environment.apiBaseUrl;
  private apiKey = environment.apiKey;
  private hash = environment.hash;

  constructor(private http: HttpClient){}

  getCharacters(params: CharactersFilterParameter):Observable<Character[]>{
    let filterByQueryParameter : string = params.filterByParameter !== undefined ? params.filterByParameter + `=${params.filterByValue}&` : '';
    let parameters = "characters?" + filterByQueryParameter + `orderBy=${params.orderBy}&limit=${params.limit}&offset=${params.offset}&ts=1&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<DataWrapper>(`${this.baseUrl}/${parameters}`)
      .pipe(pluck('data','results'));
  }

  getAvailableCharactersCount(params: CharactersFilterParameter):Observable<number>{
    let filterByQueryParameter : string = params.filterByParameter !== undefined ? params.filterByParameter + `=${params.filterByValue}&` : '';
    let parameters = "characters?" + filterByQueryParameter + `orderBy=${params.orderBy}&limit=${params.limit}&offset=${params.offset}&ts=1&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<DataWrapper>(`${this.baseUrl}/${parameters}`)
      .pipe(pluck('data','total'));
  }



}
