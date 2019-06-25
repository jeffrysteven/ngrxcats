import { ActionReducerMap } from '@ngrx/store';
import * as catStore from './store/cat';
import * as catListStore from './store/cat-list';

export interface AppState {
  cat: catStore.Cat;
  catList: catStore.Cat[];
}

export const initialState: AppState = {
  cat: catStore.initialState,
  catList: catListStore.initialState
};

export const reducers: ActionReducerMap<AppState> = {
  cat: catStore.reducer,
  catList: catListStore.reducer
};

export const effects: Array<any> = [catStore.CatEffects, catListStore.CatListEffects];

export const getMyCat = (s: AppState) => s.cat;
export const getMyCats = (s: AppState) => s.catList;
