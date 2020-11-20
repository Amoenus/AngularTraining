import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { Post } from '../models/post.model';
import { BlogState } from './blog.reducer';

// Extends the app state to include the post feature.
// This is required because posts are lazy loaded.
// So the reference to PostState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
    posts: BlogState;
}

// Selector functions
const getPostFeatureState = createFeatureSelector<BlogState>('posts');

export const getShowPostCode = createSelector(
    getPostFeatureState,
    state => state.showPostCode
);

export const getCurrentPostId = createSelector(
    getPostFeatureState,
    state => state.currentPostId
);

export const getCurrentPost = createSelector(
    getPostFeatureState,
    getCurrentPostId,
    (state, currentPostId) => {
        if (currentPostId === 0) {
            return emtpyPost;
        } else {
            return currentPostId ? state.posts.find(p => p.id === currentPostId) : null;
        }
    }
);

export const emtpyPost: Post = {
  userId: 0,
  id: 0,
  title: '',
  body: '',
};

export const getPosts = createSelector(
    getPostFeatureState,
    state => state.posts
);

export const getError = createSelector(
    getPostFeatureState,
    state => state.error
);
