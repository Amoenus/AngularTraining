
import { createReducer, on } from '@ngrx/store';
import { Post } from '../models/post.model';
import { PostApiActions, PostPageActions } from './actions';

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

export const postReducer = createReducer<BlogState>(
  initialState,
  on(PostPageActions.togglePostCode, (state): BlogState => ({
      ...state,
      showPostCode: !state.showPostCode
    })),
  on(PostPageActions.setCurrentPost, (state, action): BlogState => ({
      ...state,
      currentPostId: action.currentPostId
    })),
  on(PostPageActions.clearCurrentPost, (state): BlogState => ({
      ...state,
      currentPostId: null
    })),
  on(PostPageActions.initializeCurrentPost, (state): BlogState => ({
      ...state,
      currentPostId: 0
    })),
  on(PostApiActions.loadPostsSuccess, (state, action): BlogState => ({
      ...state,
      posts: action.posts,
      error: ''
    })),
  on(PostApiActions.loadPostsFailure, (state, action): BlogState => ({
      ...state,
      posts: [],
      error: action.error
    })),
  on(PostApiActions.updatePostSuccess, (state, action): BlogState => {
    const updatedPosts = state.posts.map(
      item => action.post.id === item.id ? action.post : item);
    return {
      ...state,
      posts: updatedPosts,
      currentPostId: action.post.id,
      error: ''
    };
  }),
  on(PostApiActions.updatePostFailure, (state, action): BlogState => ({
      ...state,
      error: action.error
    })),
  // After a create, the currentPost is the new post.
  on(PostApiActions.createPostSuccess, (state, action): BlogState => ({
      ...state,
      posts: [...state.posts, action.post],
      currentPostId: action.post.id,
      error: ''
    })),
  on(PostApiActions.createPostFailure, (state, action): BlogState => ({
      ...state,
      error: action.error
    })),
  // After a delete, the currentPost is null.
  on(PostApiActions.deletePostSuccess, (state, action): BlogState => ({
      ...state,
      posts: state.posts.filter(post => post.id !== action.postId),
      currentPostId: null,
      error: ''
    })),
  on(PostApiActions.deletePostFailure, (state, action): BlogState => ({
      ...state,
      error: action.error
    }))
);
