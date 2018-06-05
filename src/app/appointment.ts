
export interface IAppointment {
  id?: number;
  ownerCode?: number;

  firstName?: string;
  lastName?: string;
  place?: string;
  appDate?: Date;
  appTime?: string;
  appDescription?: string;
  fishName?: string;
  carBrand?: string;
};

export class Appointment {

  id: number;
  ownerCode: number;

  firstName: string;
  lastName: string;
  place: string;
  appDate: Date;
  appTime: string;
  appDescription: string;
  fishName: string;
  carBrand: string;


  constructor(id: number, ownerCode: number, firstName: string, lastName: string, place: string, appDate: Date, appTime: string, appDescription: string, fishName: string, carBrand: string) { 

      this.id = id;
      this.ownerCode = ownerCode;
      this.firstName = firstName;
      this.lastName = lastName;
      this.place = place;
      this.appDate = appDate;
      this.appTime = appTime;
      this.appDescription = appDescription;      
      this.fishName = fishName;      
      this.carBrand = carBrand;      


  }

}