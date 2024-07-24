import { createSelector } from '@ngrx/store';
import { TrackList } from '@store/favorite/favorite.type';

export const FavoriteState = (store: any): TrackList => {
  return store.favorite;
};

export const selectorFavoriteState = createSelector(
  FavoriteState,
  (favoriteSlice) => favoriteSlice
);
