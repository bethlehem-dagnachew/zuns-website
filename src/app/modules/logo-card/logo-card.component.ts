import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-logo-card',
  templateUrl: './logo-card.component.html',
  styleUrls: ['./logo-card.component.scss']
})
export class LogoCardComponent {

  @Input() image: string = ''
  @Input() name: string = ''




}
