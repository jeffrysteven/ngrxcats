import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { AddCat } from './cat.actions';
import { CatAdded } from '../cat-list/cat-list.actions';
import { CatService } from '../../cat/cat/cat.service';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class CatEffects {
  constructor(private actions$: Actions, private catService: CatService) {}

  addCat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddCat),
      mergeMap((cat: any) => {
        return this.catService.addCat(cat).pipe(map(() => CatAdded(cat)));
      })
    )
  );
}
