import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { CatModule } from './cat/cat.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    CatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
