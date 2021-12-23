import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { Comic } from '../models/comic.model';
import { DataWrapper } from '../models/dataWrapper.model';

@Injectable({
  providedIn: 'root'
})
export class ComicApiService{
  private apiKey = environment.apiKey;
  private hash = environment.hash;

  constructor(private http: HttpClient){}

  getComic(params: string):Observable<Comic[]>{
    let parameters = params + `?ts=1&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<DataWrapper>(`${parameters}`)
      .pipe(pluck('data','results'));
  }

}
