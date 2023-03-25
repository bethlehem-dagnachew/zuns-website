import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailService, Landing, Product, Service } from 'src/app/services/detail.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  companies: Company[] = []

  constructor(private router: Router, private detailService: DetailService) {

  }

  ngOnInit(): void {
    this.companies = this.detailService.getCompanies()
  }


  detail(id: number) {

    this.router.navigateByUrl(`detail/${id}`)
  }

}

export interface Company {
  id: number;
  name: string;
  image: string;
  landing?: Landing[]
  services: Service[]
  products: Product[]
}
  