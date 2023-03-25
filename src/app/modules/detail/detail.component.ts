import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService, Product, Service, Landing } from 'src/app/services/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  services: any = [];
  poducts: any = [];
  landing: any =[];
  constructor(private route: ActivatedRoute, private detailService: DetailService) {

  }

  ngOnInit(): void {
    this.landing = this.detailService.getCompanyLanding(this.route.snapshot.params['id'])
    console.log(this.route.snapshot.params['id'])
    this.services = this.detailService.getCompanyServices(this.route.snapshot.params['id'])
    this.poducts = this.detailService.getCompanyProducts(this.route.snapshot.params['id'])

    console.log(this.services)
    console.log(this.services)
  }

}
