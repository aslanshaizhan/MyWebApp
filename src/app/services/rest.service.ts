import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../article';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4200/Articles';

  // tslint:disable-next-line:typedef
  getArticles()
  {
    return this.http.get<Article[]>(this.url);
  }
}
