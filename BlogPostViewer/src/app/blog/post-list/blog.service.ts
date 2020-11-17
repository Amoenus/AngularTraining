import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/Post';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<IPost[]> {

    return this.http.get<IPost[]>("http://jsonplaceholder.typicode.com/posts");
  }
}
