import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class ProductDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    let  products =  [ 
      { id: 1,
        productName:"LCD Monitor",
        productType:"Display",
        price:"$125"
      },
      { id: 2,
        productName:"Mechanical Keyboard",
        productType:"Peripheral",
        price:"$24"
      },
      { id: 3,
        productName:"Memory Card",
        productType:"Storage",
        price:"$104"
      },
      { id: 4,
        productName:"Cat-5e Cable",
        productType:"Cables",
        price:"$10"
      },
      { id: 5,
        productName:"ATX Cabinet",
        productType:"Cabinets",
        price:"$37"
      },
      { id: 6,
        productName:"Gaming Mouse",
        productType:"Peripheral",
        price:"$20"
      },
      { id: 7,
        productName:"External USB Hard Drive",
        productType:"Storage",
        price:"$70"
      },
	  ];
 
    return {products};
   }
}
