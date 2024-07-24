import { NgModule, isDevMode } from '@angular/core';
import { StoreModule } from '@ngrx/store';
//reducers
import { authReducer } from '@store/auth/auth.reducer';
import { favoriteReducer } from '@store/favorite/favorite.reducer';
import { userReducer } from '@store/user/user.reducer';
import { searchTrackReducer } from '@store/search-track/searchTrack.reducer';
import { metaReducers } from '@store/store.persist';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const reducers = {
  auth: authReducer,
  user: userReducer,
  favorite: favoriteReducer,
  searchTrack: searchTrackReducer,
};

@NgModule({
  imports: [StoreModule.forRoot(reducers, { metaReducers }), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })],
  exports: [StoreModule],
})
export class AppStoreModule {}
