import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { IAppointment, Appointment } from './appointment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};



@Injectable()
export class AppointmentService {

  myurl: string;
  oneurl: string;  
  saveurl: string;   

  constructor(private httpClient: HttpClient) {
    this.myurl ='http://newdeli:3069/appointments';
    this.oneurl ='http://newdeli:3069/appointment';    
    this.saveurl ='http://newdeli:3069/appointment';       
  }


  getOne(lst) {

    console.log('getOne: --> ' + lst);

    return this.httpClient.get(this.oneurl + '/' + lst);

  }

  getOneById(id) {

    console.log('getOneById: ' + id + ' url: ' + this.oneurl);
    return this.httpClient.get(this.oneurl + '/id/' + id);
  }

  save(postdata) {

    console.log('AppointmentService: save: --> ' + this.saveurl);
    console.log('AppointmentService: save: posting data ' + JSON.stringify(postdata));
    return this.httpClient.post(this.saveurl, postdata, httpOptions)
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });


    ;
  }

}
