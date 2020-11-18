import { User } from '../user.model';

export interface UserState {
  maskUserName: boolean;
  currentUser?: User;
}
