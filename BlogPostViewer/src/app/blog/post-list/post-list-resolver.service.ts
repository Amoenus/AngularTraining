import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogService } from './blog.service';
import { IPost as IPost } from '../models/Post';

@Injectable()
export class PostListResolver implements Resolve<any> {

  constructor(private blogService: BlogService) { }

  resolve(): Observable<IPost[]> {
    return this.blogService.getPosts().pipe(map(posts => posts));
  }
}
