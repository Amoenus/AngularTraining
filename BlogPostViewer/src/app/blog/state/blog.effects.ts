/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BlogPageActions, BlogApiActions } from './actions';
import { BlogService } from '../services/blog.service';

@Injectable()
export class BlogEffects {

  constructor(private actions$: Actions, private blogService: BlogService) { }

  loadPosts$ = createEffect(() => this.actions$
    .pipe(
      ofType(BlogPageActions.loadPosts),
      mergeMap(() => this.blogService.getPosts()
        .pipe(
          map(posts => BlogApiActions.loadPostsSuccess({ posts })),
          catchError(error => of(BlogApiActions.loadPostsFailure({ error })))
        )
      )
    ));

  updatePost$ = createEffect(() => this.actions$
    .pipe(
      ofType(BlogPageActions.updatePost),
      concatMap(action =>
        this.blogService.updatePost(action.post)
          .pipe(
            map(post => BlogApiActions.updatePostSuccess({ post })),
            catchError(error => of(BlogApiActions.updatePostFailure({ error })))
          )
      )
    ));

  createPost$ = createEffect(() => this.actions$
    .pipe(
      ofType(BlogPageActions.createPost),
      concatMap(action =>
        this.blogService.createPost(action.post)
          .pipe(
            map(post => BlogApiActions.createPostSuccess({ post })),
            catchError(error => of(BlogApiActions.createPostFailure({ error })))
          )
      )
    ));

  deletePost$ = createEffect(() => this.actions$
    .pipe(
      ofType(BlogPageActions.deletePost),
      mergeMap(action =>
        this.blogService.deletePost(action.postId).pipe(
          map(() => BlogApiActions.deletePostSuccess({ postId: action.postId })),
          catchError(error => of(BlogApiActions.deletePostFailure({ error })))
        )
      )
    ));
}
