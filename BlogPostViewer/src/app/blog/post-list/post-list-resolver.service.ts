import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogService } from '../services/blog.service';
import { Post as Post } from '../models/post.model';

@Injectable()
export class PostListResolver implements Resolve<any> {

  constructor(private blogService: BlogService) { }

  resolve(): Observable<Post[]> {
    return this.blogService.getPosts().pipe(map(posts => posts));
  }
}
