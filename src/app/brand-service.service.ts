import { Injectable } from '@angular/core';
import { Brand } from './brand';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
//import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';



@Injectable()
export class BrandService {

  constructor() {

    console.log(JSON.stringify(this.getAll()));

  }

  getAll() {
    return Observable.of([
      {id: 1, name: 'Ford'},
      {id: 2, name: 'Chevy'},
      {id: 3, name: 'VW'},
      {id: 4, name: 'Toyota'},
      {id: 5, name: 'Jeep'}
    ]);
  }

}
