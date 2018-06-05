import { Injectable, Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/delay';
import { IEmployee, Employee } from './employee.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class SearchDataService {

  myurl: string;
  oneurl: string;  
  oneurlbyid: string;

  constructor(private httpClient: HttpClient) {
    this.myurl ='http://newdeli:3069/employees';
    this.oneurl ='http://newdeli:3069/employee'; 
    this.oneurlbyid ='http://newdeli:3069/employeebyid';    
  }

  getOne(lst) {

    console.log('getOne: ' + lst);

    return this.httpClient.get(this.oneurl + '/' + lst);
  }


  save(employee: IEmployee) {

    console.log('save: ' + JSON.stringify(employee));

    if(employee.id != null)
    {
      return this.putOne(employee);
    }
    else 
    {
      return this.postOne(employee);
    }

  }

  getOneById(id) {

    console.log('getOneById: ' + id + ' url: ' + this.oneurlbyid);
    return this.httpClient.get(this.oneurlbyid + '/' + id);
  }

  /////////////   NEW  03-11-2018 ///////////////////////////////

  /* You may take help of 3rd party libraries, for deep copying objects using jQuery, use $.extend() function, in case of lodash, use _.cloneDeep()  */

  putOne(employee: IEmployee) {
    console.log('putOne: employee: ' + JSON.stringify(employee) + ' url: ' + this.oneurlbyid);
    return this.httpClient.put<Employee>(this.oneurlbyid + '/' + employee.id, employee, httpOptions)
  }

  postOne(employee: IEmployee) {
    console.log('postOne: employee: ' + JSON.stringify(employee) + ' url: ' + this.oneurlbyid);
    return this.httpClient.post<IEmployee>(this.oneurlbyid + '/', employee, httpOptions);
  }

  deleteOne(id:number) {
    console.log('deleteOne: id: ' + JSON.stringify(id) + ' url: ' + this.oneurlbyid);
    return this.httpClient.delete(this.oneurlbyid + '/' + id);
  }

  removePropertiesForApi (employee) {
    return employee;
  }

  toUI(employee) {
    //this.addDc(employee);
    return employee;
  }

  toApi(employee: IEmployee) {
    return this.removePropertiesForApi(employee);
  }

}
