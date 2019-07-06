import { createReducer, on } from '@ngrx/store';
import { initialState } from './cat.state';
import { GetCat, AddCat } from './cat.actions';

export const reducer = createReducer(
  initialState,
  on(GetCat, () => ({
    name: '',
    age: null,
    genre: '',
    alive: true,
    photo_url: ''
  })),
  on(AddCat, (state, cat) => ({
    ...state,
    ...cat
  }))
);
