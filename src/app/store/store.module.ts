import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { initialState, reducers, effects } from '../app.state';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { initialState }),
    StoreDevtoolsModule.instrument({ maxAge: 30 }),
    EffectsModule.forRoot(effects)
  ]
})
export class AppStoreModule {}
