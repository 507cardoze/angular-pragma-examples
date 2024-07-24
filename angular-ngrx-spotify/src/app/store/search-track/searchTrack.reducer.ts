import { createReducer, on } from '@ngrx/store';
import {
  loadMoreTrackListAction,
  loadMoreTrackListFunction,
  loadTrackListAction,
  loadTrackListFunction,
  resetSearchTrackAction,
  resetSearchTrackFunction,
} from '@store/search-track/searchTrack.actions';
import { searchTrackType } from '@store/search-track/searchTrack.type';

export const initialState: searchTrackType = {
  trackList: [],
};

export const searchTrackReducer = createReducer(
  initialState,
  on(loadTrackListAction, loadTrackListFunction),
  on(loadMoreTrackListAction, loadMoreTrackListFunction),
  on(resetSearchTrackAction, resetSearchTrackFunction)
);
