import { BrowserModule } from '@angular/platform-browser';
import { NgForm, FormsModule  } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HttpParams} from "@angular/common/http";
import { AppointmentService } from './appointment.service';
import { SearchDataService } from './search-data-service.service';
import { BrandService } from './brand-service.service';
import { DateFormatPipe } from './date-format.pipe';
import { TimeFormatPipe } from './time-format.pipe';
import { MainPageComponent } from './main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
//import { BootstrapInputConfigInterface, BootstrapFormGroup } from './ng-bootstrap-input/';


@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe,
    TimeFormatPipe,    
    MainPageComponent
  ],
  imports: [
    //BootstrapInputModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,    
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()  /* required for modal window  */
  ],
  providers: [AppointmentService, BrandService, NgbModal, SearchDataService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
