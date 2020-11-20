import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { handleError } from './handleError';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private rootUrl = 'https://jsonplaceholder.typicode.com/posts';

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private jsonContentTypeHeader = { 'Content-Type': 'application/json' };

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.rootUrl}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(handleError)
      );
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.rootUrl}/${id}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(handleError)
      );
  }

  createPost(post: Post): Observable<Post> {
    const headers = new HttpHeaders(this.jsonContentTypeHeader);
    // Post Id must be null for the Web API to assign an Id
    const newPost = { ...post, id: null };
    return this.http.post<Post>(this.rootUrl, newPost, { headers })
      .pipe(
        tap(data => console.log('createPost: ' + JSON.stringify(data))),
        catchError(handleError)
      );
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  deletePost(id: number): Observable<{}> {
    const headers = new HttpHeaders(this.jsonContentTypeHeader);
    const url = `${this.rootUrl}/${id}`;
    return this.http.delete<Post>(url, { headers })
      .pipe(
        tap(data => console.log('deletePost: ' + id)),
        catchError(handleError)
      );
  }

  updatePost(post: Post): Observable<Post> {
    const headers = new HttpHeaders(this.jsonContentTypeHeader);
    const url = `${this.rootUrl}/${post.id}`;
    return this.http.put<Post>(url, post, { headers })
      .pipe(
        tap(() => console.log('updatePost: ' + post.id)),
        // Return the post on an update
        map(() => post),
        catchError(handleError)
      );
  }
}
