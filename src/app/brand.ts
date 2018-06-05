
export interface IBrand {
  id?: number;
  brand?: string;
};

export class Brand {

  id: number;
  name: string;


  constructor(id: number, name: string) { 

      this.id = id;
      this.name = name;
   
  }

}