import { createAction, props } from '@ngrx/store';
import { Cat } from './cat.state';

export const GET_CAT = '[Cat/API] Load cat';
export const ADD_YEAR = '[Cat/API] Add a year to cat';
export const ADD_CAT = '[Cat/API] Create a cat';
export const CAT_ADDED = '[Cat/API] Cat created';

export const GetCat = createAction(GET_CAT);
export const AddAYear = createAction(ADD_YEAR, props<{ age: number }>());
export const AddCat = createAction(ADD_CAT, props<{ cat: Cat }>());
export const CatAdded = createAction(CAT_ADDED, props<{ cat: Cat }>());
