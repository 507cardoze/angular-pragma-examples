import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpService } from '@app/services/http.service';
import {
  resetUserInfoAction,
  setUserInfoAction,
} from '@store/user/user.actions';
import type { UserStateType } from '@store/user/user.type';
import { selectorUserState } from '@store/user/user.selector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpservice: HttpService, private store: Store) {}

  getSpotifySession(): Promise<UserStateType> {
    return this.httpservice.getQuery('me');
  }

  setUserInfo(user: UserStateType): void {
    this.store.dispatch(setUserInfoAction({ user }));
  }

  syncAppUser(): void {
    this.getSpotifySession().then((data) => this.setUserInfo(data));
  }

  resetUser(): void {
    this.store.dispatch(resetUserInfoAction());
  }

  getUser(): Observable<UserStateType> {
    return this.store.select(selectorUserState);
  }
}
