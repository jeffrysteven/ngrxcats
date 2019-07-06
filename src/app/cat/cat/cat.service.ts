import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const API_URL = 'http://localhost:1337/parse/classes/Cats';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(private http: HttpClient) {}

  addCat(cat) {
    return this.http.post(API_URL, cat, {
      headers: { 'X-Parse-Application-Id': 'app' }
    });
  }

  getCats() {
    return this.http.get(API_URL, {
      headers: { 'X-Parse-Application-Id': 'app' }
    });
  }
}
