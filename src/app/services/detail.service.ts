import { Injectable } from '@angular/core';
import { Company } from '../modules/group/group.component';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  companies: Company[] = [
    {
      id: 1,
      name: 'Zuns International Trading PLC',
      image: 'assets/l3.jfif',
      services: [
        {
          name: 'Metal sales',
          image: ''
        }
      ],
      products: [
        {
          name: 'PVC metals and tubes',
          image: ''
        }
      ]
    },
    {
      id: 2,
      name: 'Zuns International Trading PLC',
      image: 'assets/l2.jfif',
      services: [
        {
          name: 'Metal sales',
          image: ''
        }
      ],
      products: [
        {
          name: 'PVC metals and tubes',
          image: ''
        }
      ]
    },
    {
      id: 3,
      name: 'Zuns Goods Wholesalers Co. LLC',
      image: 'assets/l1.jfif',
      services: [
        {
          name: 'Metal sales',
          image: ''
        }
      ],
      products: [
        {
          name: 'PVC metals and tubes',
          image: ''
        }
      ]
    }
  ]


  constructor() { }

  getCompanies() {
    return this.companies
  }

  getCompanyServices(id: number) {

    return this.companies[id - 1].services;

  }

  getCompanyProducts(id: number) {
    return this.companies[id - 1].products;

  }
}


export interface Service {
  name: string;
  image: string;
  description?: string;

}

export interface Product {
  name: string;
  image: string;
  description?: string;
}