import { Post } from '../../models/post.model';

import { createAction, props } from '@ngrx/store';

export const togglePostCode = createAction(
  '[Blog Page] Toggle Post Code'
);

export const setCurrentPost = createAction(
  '[Blog Page] Set Current Post',
  props<{ currentPostId: number }>()
);

export const clearCurrentPost = createAction(
  '[Blog Page] Clear Current Post'
);

export const initializeCurrentPost = createAction(
  '[Blog Page] Initialize Current Post'
);

export const loadPosts = createAction(
  '[Blog Page] Load'
);

export const updatePost = createAction(
  '[Blog Page] Update Post',
  props<{ post: Post }>()
);

export const createPost = createAction(
  '[Blog Page] Create Post',
  props<{ post: Post }>()
);

export const deletePost = createAction(
  '[Blog Page] Delete Post',
  props<{ postId: number }>()
);
