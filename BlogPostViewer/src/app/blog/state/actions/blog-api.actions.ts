
import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/post.model';

export const loadPostsSuccess = createAction(
  '[Post API] Load Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Post API] Load Fail',
  props<{ error: string }>()
);

export const updatePostSuccess = createAction(
  '[Post API] Update Post Success',
  props<{ post: Post }>()
);

export const updatePostFailure = createAction(
  '[Post API] Update Post Fail',
  props<{ error: string }>()
);

export const createPostSuccess = createAction(
  '[Post API] Create Post Success',
  props<{ post: Post }>()
);

export const createPostFailure = createAction(
  '[Post API] Create Post Fail',
  props<{ error: string }>()
);

export const deletePostSuccess = createAction(
  '[Post API] Delete Post Success',
  props<{ postId: number }>()
);

export const deletePostFailure = createAction(
  '[Post API] Delete Post Fail',
  props<{ error: string }>()
);
