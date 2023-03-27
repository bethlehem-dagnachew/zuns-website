import { Injectable } from '@angular/core';
import { Company } from '../modules/group/group.component';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  companies: Company[] = [
    {
      id: 1,
      color: '1',
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
          name: 'Importer',
          image: ''
        },
        {
          name: 'Wholesaler for metalsheets, Chemicals and steel',
          image: ''
        }
      ],
      products: [
        {
          name: 'Metalsheets',
          image: 'assets/product/product5.jpeg'
        },
        {
          name: 'Chemicals',
          image: 'assets/chemicals.jfif'
        },
        {
          name: 'Steel',
          image: 'assets/product/product3.jpeg'
        }
      ]
    },
    {
      id: 2,
      color: '2',
      name: 'Shire Shanghai Industrial and Trading PLC',
      image: 'assets/l4.jpeg',
      landing:
      {
        name: 'Shire Shanghai Industrial and Trading PLC',
        image: ''

      }
      ,
      services: [
        {
          name: 'Plastic Manufacturing',
          image: 'assets/plastic.jfif'
        },
        {
          name: 'PP Bags and plastic recycling',
          image: 'assets/ppbag.jfif'
        },
        {
          name: 'Minning',
          image: 'assets/gold.jfif'
        },
        {
          name: 'Granite Exports',
          image: "assets/granite.jfif"
        },


      ],
      products: [
        {
          name: 'PP Bags',
          image: 'assets/ppbag.jfif'
        },
        {
          name: 'Granite',
          image: 'assets/granite.jfif'
        },
        {
          name: 'Animal Feed',
          image: "assets/animal.jfif"
        }, {
          name: 'Animal Arbiter',
          image: "assets/arbiter.jfif"
        }
      ]
    },
    {
      id: 3,
      color: '2',
      name: 'Zuns Goods Wholesalers Co. LLC',
      image: 'assets/l1.jfif',

      landing: {
        name: 'Zuns Goods Wholesalers Co. LLC',
        image: ''

      },

      services: [
        {
          name: 'International Trading',
          image: 'assets/international.jfif'
        },
        {
          name: 'Import Export',
          image: 'assets/import.jfif'
        },
        {
          name: 'Logistics',
          image: 'assets/logistics.jfif'
        },
        {
          name: 'Wholesaler for wheat sugar and oil',
          image: 'assets/wholesaler.jfif'
        }
      ],
      products: [
        {
          name: 'Wheat Products',
          image: 'assets/wheat.jfif'
        },
        {
          name: 'Oil Products',
          image: 'assets/oil.jfif'
        },
        {
          name: 'Sugar Products',
          image: 'assets/sugar.jfif'
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