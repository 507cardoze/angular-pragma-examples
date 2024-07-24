import { ActionReducer, MetaReducer } from '@ngrx/store';
import { LocalStorageConfig, localStorageSync } from 'ngrx-store-localstorage';

const config: LocalStorageConfig = {
	keys: ['auth', 'user', 'favorite', 'searchTrack'],
	rehydrate: true,
	removeOnUndefined: true,
};

const localStorageSyncReducer = <T>(reducer: ActionReducer<T>) => {
	return localStorageSync(config)(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [
	localStorageSyncReducer,
];
