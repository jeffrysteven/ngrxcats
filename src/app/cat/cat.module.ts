import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat/cat.component';
import { SharedModule } from '../shared.module';
import { CatService } from './cat/cat.service';
import { CatListComponent } from './cat-list/cat-list.component';

@NgModule({
  declarations: [CatComponent, CatListComponent],
  imports: [CommonModule, SharedModule],
  providers: [CatService]
})
export class CatModule {}
