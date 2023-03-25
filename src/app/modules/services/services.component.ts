import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/services/detail.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input() services: Service[] = []

  constructor() { }

  ngOnInit(): void {
    console.log('the services are ', this.services)
  }

}
