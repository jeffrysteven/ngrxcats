import { createAction, props } from '@ngrx/store';
import { Cat } from '../cat/cat.state';

export const CatAdded = createAction('[Cat List] Cat Added', (cat: Cat) => cat);

export const CatsLoaded = createAction(
  '[Cat List] Cats loaded',
  (cats: Cat[]) => {
    console.log('action', cats);
    return cats;
  }
);

export const LoadCats = createAction('[Cat List] List Cats');
