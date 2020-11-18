/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostPageActions, PostApiActions } from './actions';
import { BlogService } from '../services/blog.service';

@Injectable()
export class PostEffects {

  constructor(private actions$: Actions, private blogService: BlogService) { }

  loadPosts$ = createEffect(() => this.actions$
    .pipe(
      ofType(PostPageActions.loadPosts),
      mergeMap(() => this.blogService.getPosts()
        .pipe(
          map(posts => PostApiActions.loadPostsSuccess({ posts })),
          catchError(error => of(PostApiActions.loadPostsFailure({ error })))
        )
      )
    ));

  updatePost$ = createEffect(() => this.actions$
    .pipe(
      ofType(PostPageActions.updatePost),
      concatMap(action =>
        this.blogService.updatePost(action.post)
          .pipe(
            map(post => PostApiActions.updatePostSuccess({ post })),
            catchError(error => of(PostApiActions.updatePostFailure({ error })))
          )
      )
    ));

  createPost$ = createEffect(() => this.actions$
    .pipe(
      ofType(PostPageActions.createPost),
      concatMap(action =>
        this.blogService.createPost(action.post)
          .pipe(
            map(post => PostApiActions.createPostSuccess({ post })),
            catchError(error => of(PostApiActions.createPostFailure({ error })))
          )
      )
    ));

  deletePost$ = createEffect(() => this.actions$
    .pipe(
      ofType(PostPageActions.deletePost),
      mergeMap(action =>
        this.blogService.deletePost(action.postId).pipe(
          map(() => PostApiActions.deletePostSuccess({ postId: action.postId })),
          catchError(error => of(PostApiActions.deletePostFailure({ error })))
        )
      )
    ));
}
