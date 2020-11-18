
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../user.model';
import { UserPageActions } from './actions';

// State for this feature (User)
export interface UserState {
  maskUserName: boolean;
  currentUser?: User;
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: undefined
};

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserPageActions.maskUserName, (state): UserState => ({
      ...state,
      maskUserName: !state.maskUserName
    }))
);
