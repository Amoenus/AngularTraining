import { User } from '../user.model';

export interface UserState {
  maskPassword: boolean;
  currentUser?: User;
}
