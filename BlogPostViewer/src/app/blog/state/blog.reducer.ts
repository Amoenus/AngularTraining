
import { createReducer, on } from '@ngrx/store';
import { Post } from '../models/post.model';
import { BlogApiActions, BlogPageActions } from './actions';

// State for this feature (Blog)
export interface BlogState {
  showPostCode: boolean;
  currentPostId: number | null;
  posts: Post[];
  error: string;
}

const initialState: BlogState = {
  showPostCode: true,
  currentPostId: null,
  posts: [],
  error: ''
};

export const blogReducer = createReducer<BlogState>(
  initialState,
  on(BlogPageActions.togglePostCode, (state): BlogState => ({
      ...state,
      showPostCode: !state.showPostCode
    })),
  on(BlogPageActions.setCurrentPost, (state, action): BlogState => ({
      ...state,
      currentPostId: action.currentPostId
    })),
  on(BlogPageActions.clearCurrentPost, (state): BlogState => ({
      ...state,
      currentPostId: null
    })),
  on(BlogPageActions.initializeCurrentPost, (state): BlogState => ({
      ...state,
      currentPostId: 0
    })),
  on(BlogApiActions.loadPostsSuccess, (state, action): BlogState => ({
      ...state,
      posts: action.posts,
      error: ''
    })),
  on(BlogApiActions.loadPostsFailure, (state, action): BlogState => ({
      ...state,
      posts: [],
      error: action.error
    })),
  on(BlogApiActions.updatePostSuccess, (state, action): BlogState => {
    const updatedPosts = state.posts.map(
      item => action.post.id === item.id ? action.post : item);
    return {
      ...state,
      posts: updatedPosts,
      currentPostId: action.post.id,
      error: ''
    };
  }),
  on(BlogApiActions.updatePostFailure, (state, action): BlogState => ({
      ...state,
      error: action.error
    })),
  // After a create, the currentPost is the new post.
  on(BlogApiActions.createPostSuccess, (state, action): BlogState => ({
      ...state,
      posts: [...state.posts, action.post],
      currentPostId: action.post.id,
      error: ''
    })),
  on(BlogApiActions.createPostFailure, (state, action): BlogState => ({
      ...state,
      error: action.error
    })),
  // After a delete, the currentPost is null.
  on(BlogApiActions.deletePostSuccess, (state, action): BlogState => ({
      ...state,
      posts: state.posts.filter(post => post.id !== action.postId),
      currentPostId: null,
      error: ''
    })),
  on(BlogApiActions.deletePostFailure, (state, action): BlogState => ({
      ...state,
      error: action.error
    }))
);
