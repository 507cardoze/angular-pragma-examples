import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import type { Item } from '@store/favorite/favorite.type';
import type { searchTrackType } from '@store/search-track/searchTrack.type';

import {
  loadMoreTrackListAction,
  loadTrackListAction,
} from '@store/search-track/searchTrack.actions';
import { selectorSearchTrackState } from '@store/search-track/searchTrack.selector';
import { HttpService } from '@app/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class SearchTrackService {
  constructor(private httpservice: HttpService, private store: Store) {}

  querySpotifyForTracks(
    query: string,
    { limit, offset }: optionsType
  ): Promise<any> {
    const type: string = `track`;
    const market: string = `ES`;

    const q: string = `search?q=${query}&type=${type}&market=${market}&limit=${limit}&offset=${offset}`;

    return this.httpservice.getQuery(q);
  }

  loadTrackList(trackList: Item[]): void {
    this.store.dispatch(loadTrackListAction({ trackList }));
  }

  loadMoreTrackList(trackList: Item[]): void {
    this.store.dispatch(loadMoreTrackListAction({ trackList }));
  }

  getTrackList(): Observable<searchTrackType> {
    return this.store.select(selectorSearchTrackState);
  }
}

export type optionsType = {
  limit: number;
  offset: number;
};
