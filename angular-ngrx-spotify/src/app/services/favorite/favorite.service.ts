import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addFavoriteAction,
  removeFavoriteAction,
  resetFavoritesAction,
} from '@store/favorite/favorite.actions';
import { selectorFavoriteState } from '@store/favorite/favorite.selectors';
import type { Item, TrackList } from '@store/favorite/favorite.type';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor(private store: Store) {}

  getFavorites(): Observable<TrackList> {
    return this.store.select(selectorFavoriteState);
  }

  addFavorite(track: Item): void {
    this.store.dispatch(addFavoriteAction({ track }));
  }

  removeFavorite(track: Item): void {
    this.store.dispatch(removeFavoriteAction({ track }));
  }

  resetFavorites(): void {
    this.store.dispatch(resetFavoritesAction());
  }
}
