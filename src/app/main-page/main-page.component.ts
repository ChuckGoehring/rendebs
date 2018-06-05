/*  from Alt2ViewComponent

*/

import { Component, OnInit, OnChanges  } from '@angular/core';
import { IAppointment, Appointment } from './../appointment';
import { AppointmentService } from './../appointment.service';
import { SearchDataService } from './../search-data-service.service';
import { HttpModule, Http, Response } from '@angular/http';
import { HttpClient, HttpParams } from "@angular/common/http";
import { DatePipe } from '@angular/common';
import { DateFormatPipe } from './../date-format.pipe';
import { TimeFormatPipe } from './../time-format.pipe';
import { NgForm, FormsModule  } from '@angular/forms';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgbRootModule, NgbModal, ModalDismissReasons, NgbDropdownModule, NgbAlertModule, NgbButtonsModule, NgbTooltipModule, NgbCheckBox, NgbRadioGroup, NgbDropdownConfig, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
//import {NgbRadio} from '@ng-bootstrap/buttons';NgbRadio


//import { NgbButtonsModule } from './ngb-radio-module';
//import { NgbdButtonsRadio } from './buttons-radio';

//import { BootstrapInputConfigInterface, BootstrapFormGroup } from 'ng-bootstrap-input';
import { FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms'
import { IBrand, Brand } from './../brand';
import { BrandService } from './../brand-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']  
})

//, OnChanges //NgbdModalBasic
export class MainPageComponent  implements OnInit  { 

  closeResult: string;

  dbg = false;

  formmodel;
  appointment:  IAppointment;
  //aptm: Appointment;
  empdata: any;
  empdataresult: any;
  brandData: any;
  pow: any;  // temp
  shoeSize: any;

  people: string[]= ["Dave","Jim","Rick","John"];
  dateNow : Date = new Date();
  dateNowISO = this.dateNow.toISOString();
  dateNowMilliseconds = this.dateNow.getTime();
  dateNowTime = this.dateNow.toLocaleTimeString('en-US'); 
  dateWithouthSecond = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  dateISO = new Date().toISOString();
  dateX = new Date().toString()


  constructor(private modalService: NgbModal, private appointmentService: AppointmentService, 
    private searchDataService: SearchDataService, private brandService: BrandService) { 

    this.brandService.getAll()
    //.debug("ngOnInit: ++++getOne: ")
    .subscribe( 
      (value) => this.brandData = value,
      () =>  { console.log('error')  },
      () =>  { console.log('completx') 
        , console.log('brandData: ' + JSON.stringify(this.brandData))
        //,    (this.formmodel.controls['id']).setValue(this.brandData.id, { onlySelf: true })
        //,    (this.formmodel.controls['carBrand']).setValue(this.appointment.carBrand, { onlySelf: true })

       }
      );

  }


  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {

    this.appointment = new Appointment(0, 0, 
      '', '',        //first & last
      '',            // place
       new Date("2018-05-29"),    // date
      '', '', '', '');

      var dt = new Date(this.appointment.appDate); //);
      console.log('dt date : ' + JSON.stringify(dt));
  }

  submitted = false;

  stripIt = function(inputString) {
    console.log('stripIt: inputString: ' + JSON.stringify(inputString));
    // 2017-10-09
    var newFmt = inputString.substr(0,10);

    console.log('stripIt: inputString: ' + inputString + ' newFmt: ' + newFmt);
    return newFmt;
  }


  callFormatDate() {

    //var dt: string = formatDate(value: string | number | Date, format: string, locale: string, timezone?: string): string

  }




  newAppointment() {
    console.log('newAppointment: starting; ');
    this.appointment = new Appointment(0, 0, 
        'Rick', 'Nelson',        //first & last
        'Boston',            // place
        new Date(),    // date
        this.dateWithouthSecond, '', '', ''); 

    //console.log('newAppointment: defaultDate: ' + JSON.stringify(this.appointment));  

    console.log('newAppointment: finishing; ');        
  }

  onSave(event: KeyboardEvent) {
    let evtMsg = event ? ' Event target is ' + (<HTMLElement>event.target).textContent : '';

    // This works    
    console.log('onSave: ' + JSON.stringify(this.appointment));
    console.log('onSave: evt: ' + JSON.stringify(event));
    this.appointmentService.save(this.appointment);
    console.log('onSave: after save call: calling stopPropagation:  ' );

    if (event) { event.stopPropagation(); }
  }

  onNew()  {
    // This tests that the changes in the form make it to the appointment object
    console.log('onNew: this.appointment: ' + JSON.stringify(this.appointment));
    this.newAppointment();
  }

  onDumpFormData()  {
    // This tests that the changes in the form make it to the appointment object
    console.log('onDumpFormData: this.appointment: ' + JSON.stringify(this.appointment));
  }

  onSubmit() { 
    console.log('onSubmit: ' + JSON.stringify(this.appointment));

    this.submitted = true; 
  }

  onSubmitSearch() {

    if(this.appointment.id) {

      console.log('onSubmitSearch: this.appointment.id valid');

      this.appointmentService.getOneById(this.appointment.id)
      //.debug("ngOnInit: ++++getOne: ")
      .subscribe( 
        (value) => this.appointment = value,
        () =>  { console.log('error')  },
        () =>  { console.log('complete') 
          , console.log(JSON.stringify(this.appointment))
         }
        );



    }






/*


 not a model form - template based form
          ,    (this.formmodel.controls['id']).setValue(this.appointment.id, { onlySelf: true })
          ,    (this.formmodel.controls['ownerCode']).setValue(this.appointment.ownerCode, { onlySelf: true })              
          ,    (this.formmodel.controls['firstName']).setValue(this.appointment.firstName, { onlySelf: true })
          ,    (this.formmodel.controls['lastName']).setValue(this.appointment.lastName, { onlySelf: true })
          ,    (this.formmodel.controls['place']).setValue(this.appointment.place, { onlySelf: true })
          ,    (this.formmodel.controls['appDate']).setValue(this.stripIt(this.appointment.appDate), { onlySelf: true })

          ,    (this.formmodel.controls['appTime']).setValue(this.appointment.appTime, { onlySelf: true })
          ,    (this.formmodel.controls['appDescription']).setValue(this.appointment.appDescription, { onlySelf: true })
          ,    (this.formmodel.controls['fishName']).setValue(this.appointment.fishName, { onlySelf: true })
          ,    (this.formmodel.controls['carBrand']).setValue(this.appointment.carBrand, { onlySelf: true })




    var searchBox = (<HTMLInputElement>document.getElementById("searchOnNameOrID")); 
    var searchBoxValue  = searchBox.value;

    //console.log("moment().format(): " + moment().format());

    this.appointmentService.getOne(searchBoxValue)
      //.debug("ngOnInit: ++++getOne: ")
      .subscribe( 
        (value) => this.appointment = value,
        () =>  { console.log('error')  },
        () =>  { console.log('complete') 
          , console.log(JSON.stringify(this.appointment))
          ,    (this.formmodel.controls['id']).setValue(this.appointment.id, { onlySelf: true })
          ,    (this.formmodel.controls['ownerCode']).setValue(this.appointment.ownerCode, { onlySelf: true })              
          ,    (this.formmodel.controls['firstName']).setValue(this.appointment.firstName, { onlySelf: true })
          ,    (this.formmodel.controls['lastName']).setValue(this.appointment.lastName, { onlySelf: true })
          ,    (this.formmodel.controls['place']).setValue(this.appointment.place, { onlySelf: true })
          ,    (this.formmodel.controls['appDate']).setValue(this.stripIt(this.appointment.appDate), { onlySelf: true })

          ,    (this.formmodel.controls['appTime']).setValue(this.appointment.appTime, { onlySelf: true })
          ,    (this.formmodel.controls['appDescription']).setValue(this.appointment.appDescription, { onlySelf: true })
          ,    (this.formmodel.controls['fishName']).setValue(this.appointment.fishName, { onlySelf: true })
          ,    (this.formmodel.controls['carBrand']).setValue(this.appointment.carBrand, { onlySelf: true })

         }
        );

*/
    }

}


/*

  ngOnChanges(evt) {
    console.log('ngOnChanges: ' + JSON.stringify(evt));
    console.log('ngOnChanges: ' + JSON.stringify(this.appointment));
  }

  onCarBrandChange(evt) { 
    console.log('onBrandChange: ' + JSON.stringify(evt));
    console.log('onBrandChange: ' + JSON.stringify(this.appointment));
  }



  swapIt = function(inputString) {
    console.log('swapIt: inputString: ' + JSON.stringify(inputString));
    // 2017-10-09
    var newFmt = inputString.substr(5,2) + "/" + inputString.substr(8,2) + "/" +inputString.substr(0,4) ;

    console.log('swapIt: inputString: ' + inputString + ' newFmt: ' + newFmt);
    return newFmt;
  }



    this.calculate(40);
  calculate(input) {

    if(input == 11) return 25;
    else if (input == 12) return 200;
    return 600;
  }
  onUnitTestableFunc() {
    var returnedVal = this.calculate(11);
    console.log('returnedVal: ' + returnedVal);
  }



  dfp: DateFormatPipe = new DateFormatPipe('en-US');
  tfp: TimeFormatPipe = new TimeFormatPipe('en-US');
    console.log('Date: ' + this.dfp.transform(new Date(), '')); // 21 September
    console.log('Time: ' + this.tfp.transform(new Date(), '')); // hh:mm:ss



    // This works
    //console.log('onSave: detailForm.firstName: ' + detailForm.firstName.value);


      //console.log('onSave: JSON.stringify(detailForm): ' + JSON.stringify(detailForm));

        
        touched untouched  .ng-
        dirty pristine
        valid invalid

        


import { Component, OnInit, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }


  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }



}


<p>
  main-page works!
</p>

<!-- Create Modal HTML template -->

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#createModal">
  CREATE
</button>
<button class="btn btn-lg btn-outline-primary" (click)="open()">Launch demo modal</button>
<!-- Modal -->
<div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>This is a fine body</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


<!-- End -->



*/
