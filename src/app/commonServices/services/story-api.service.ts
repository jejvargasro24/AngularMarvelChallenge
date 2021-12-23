import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataWrapper } from '../models/dataWrapper.model';
import { Stories } from '../models/stories.model';

@Injectable({
  providedIn: 'root'
})
export class StoryApiService {
  private apiKey = environment.apiKey;
  private hash = environment.hash;

  constructor(private http: HttpClient) { }

  getStory(params: string):Observable<Stories[]>{
    let parameters = params + `?ts=1&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<DataWrapper>(`${parameters}`)
      .pipe(pluck('data','results'));
  }

}
