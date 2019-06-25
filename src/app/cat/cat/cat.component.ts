import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getMyCat, AppState } from '../../app.state';
import { GetCat, AddAYear, AddCat } from '../../store/cat';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  cat$: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.newCat();
    this.cat$ = this.store.pipe(select(getMyCat));
  }

  newCat() {
    this.store.dispatch(GetCat());
  }

  addAYear(age) {
    this.store.dispatch(AddAYear({ age: age + 1 }));
  }

  addNewCat(valid, cat) {
    this.store.dispatch(AddCat(cat));
  }
}
