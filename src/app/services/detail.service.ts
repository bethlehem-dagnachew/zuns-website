import { Injectable } from '@angular/core';
import { Company } from '../modules/group/group.component';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  companies: Company[] = [
    {
      id: 1,
      color: '#FF0000',
      name: 'Zuns International Trading PLC',
      image: 'assets/l3.jfif',
      landing:
      {
        name: 'Zuns International Trading PLC',
        image: ''

      }
      ,
      services: [
        {
          name: 'Metal sales',
          image: ''
        },
        {
          name: 'Plastic Bag Manufacturing',
          image: ''
        }
      ],
      products: [
        {
          name: 'PVC metals and tubes',
          image: ''
        },
        {
          name: 'Food Materials',
          image: ''
        }
      ]
    },
    {
      id: 2,
      color: '#ffd700',
      name: 'Shire Shanghai Industrial and Trading PLC',
      image: 'assets/l2.jfif',
      landing:
      {
        name: 'Shire Shanghai Industrial and Trading PLC',
        image: ''

      }
      ,
      services: [
        {
          name: 'Metal sales',
          image: ''
        },
        {
          name: 'Plastic Manufacturing',
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
      color: '#00ff00',
      name: 'Zuns Goods Wholesalers Co. LLC',
      image: 'assets/l1.jfif',

      landing: {
        name: 'Zuns Goods Wholesalers Co. LLC',
        image: ''

      },

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
    return this.companies;
  }

  getCompanyServices(id: number) {

    return this.companies[id - 1].services;

  }

  getCompanyProducts(id: number) {
    return this.companies[id - 1].products;

  }

  getCompanyLanding(id: number) {
    return this.companies[id - 1].landing;
  }

  getCompanyColor(id: number) {
    return this.companies[id - 1].color
  }
}


export interface Service {
  name: string;
  image: string;
  description?: string;

}
export interface Landing {
  name: string;
  image: string;
  description?: string;

}

export interface Product {
  name: string;
  image: string;
  description?: string;
}