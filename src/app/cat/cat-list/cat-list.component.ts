import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from 'src/app/store/cat';
import { Store, select } from '@ngrx/store';
import { AppState, getMyCats } from 'src/app/app.state';
import { LoadCats } from 'src/app/store/cat-list';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  cats$: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getCats();
    this.cats$ = this.store.pipe(select(getMyCats));
  }

  getCats() {
    this.store.dispatch(LoadCats());
  }
}
