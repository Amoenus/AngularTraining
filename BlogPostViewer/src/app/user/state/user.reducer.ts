
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../user.model';
import { UserPageActions } from './actions';

// State for this feature (User)
export interface UserState {
  maskPassword: boolean;
  currentUser?: User;
}

const initialState: UserState = {
  maskPassword: true,
  currentUser: undefined
};

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskPassword = createSelector(
  getUserFeatureState,
  state => state.maskPassword
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserPageActions.maskPassword, (state): UserState => ({
      ...state,
      maskPassword: !state.maskPassword
    }))
);
