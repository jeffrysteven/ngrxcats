import { createReducer, on } from '@ngrx/store';
import { initialState } from './cat-list.state';
import { CatAdded, LoadCats, CatsLoaded } from './cat-list.actions';
import { Cat } from '../cat/cat.state';

export const reducer = createReducer(
  initialState,
  on(LoadCats, state => [...state]),
  on(CatsLoaded, (state, cats: Cat[]) => [...state, ...cats]),
  on(CatAdded, (state, cat) => [...state, cat])
);
