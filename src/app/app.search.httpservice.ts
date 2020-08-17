
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Search from './models/app.search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchHttpService {
  private ApiURL: string = 'https://localhost:4200/api/Search';
  constructor(private httpclient: HttpClient) {}

  getToDos(): Observable<Search[]> {
    return this.httpclient.get<Search[]>(this.ApiURL);
  }

  createToDos(payload: Search): Observable<Search> {
    console.log("")
    console.log(payload)
    return this.httpclient.post<Search>(this.ApiURL, JSON.stringify(payload), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}