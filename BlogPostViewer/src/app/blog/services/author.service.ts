import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Author } from '../models/author.model';
import { handleError } from './handleError';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private rootUrl = 'https://jsonplaceholder.typicode.com/users';


  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.rootUrl}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(handleError)
      );
  }

  getAuthor(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.rootUrl}/${id}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(handleError)
      );
  }
}
