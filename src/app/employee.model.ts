export interface IEmployee {
  id?: number;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zip?: string;
  dogName?: string;
  fishName?: string;
  carBrand?: string;
};


export class Employee implements IEmployee {

  id: number;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  zip: string;
  dogName: string;
  fishName: string;
  carBrand: string;


  constructor(id: number, firstName: string, lastName: string, city: string, state: string, zip: string, dogName: string, fishName: string, carBrand: string) { 

      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.dogName = dogName;      
      this.fishName = fishName;      
      this.carBrand = carBrand;      


  }

}
