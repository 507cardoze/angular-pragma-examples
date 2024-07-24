import { createSelector } from '@ngrx/store';
import { AuthStateType } from '@store/auth/auth.type';

export const AuthState = (store: any) => {
  return store.auth as AuthStateType;
};

export const selectorAuthState = createSelector(AuthState, (authSlice) => authSlice);
