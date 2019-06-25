import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { CatAdded, LoadCats, CatsLoaded } from './cat-list.actions';
import { GetCat } from '../cat/cat.actions';
import { CatService } from '../../cat/cat/cat.service';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Cat } from '../cat/cat.state';

@Injectable()
export class CatListEffects {
  constructor(private actions$: Actions, private catService: CatService) {}

  catAdded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatAdded),
      mergeMap(cat => {
        return this.catService.addCat(cat).pipe(map(() => GetCat()));
      })
    )
  );

  loadCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadCats),
      switchMap(() => this.catService.getCats().pipe(map((cats: any) => {
        console.log('effect', cats);
        return CatsLoaded(cats);
      })))
    )
  );
}
