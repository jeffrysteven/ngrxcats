import { createReducer, on } from '@ngrx/store';
import { initialState } from './cat-list.state';
import { CatAdded, LoadCats, CatsLoaded } from './cat-list.actions';

export const reducer = createReducer(
  initialState,
  on(LoadCats, state => [...state]),
  on(CatsLoaded, (state, { results }: any) => {
    return [...state, ...results];
  }),
  on(CatAdded, (state, cat) => [...state, cat])
);
