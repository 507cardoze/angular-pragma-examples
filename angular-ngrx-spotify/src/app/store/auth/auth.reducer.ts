import { createReducer, on } from '@ngrx/store';
import {
  LoginAction,
  loginFunction,
  LogoutAction,
  logoutFunction,
} from '@store/auth/auth.actions';
import { AuthStateType } from '@store/auth/auth.type';

export const initialState: AuthStateType = {
  isAuthenticated: false,
  access_token: null,
  token_type: null,
  expires_in: null,
};

export const authReducer = createReducer(
  initialState,
  on(LoginAction, loginFunction),
  on(LogoutAction, logoutFunction)
);
