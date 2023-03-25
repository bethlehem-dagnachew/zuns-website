import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @Input() landingText: string = 'Zuns Business Group';
  @Input() color: string = 'greenwood';
  @Input() description: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
  consequatur
  beatae iusto,
  delectus reprehenderit
  ratione sunt quis sed soluta similique ad perspiciatis natus quae suscipit commodi, neque deleniti. Aperiam,
  voluptates! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus ratione iusto
  debitis illo accusamus magni magnam rem a sunt`

  ngOnInit() {
    console.log(this.color)
  }
  // right here we have to fix this part to make the color dynmic it actually console.log right but it's not assigning it to the div text

  getColor() {
    console.log(this.color, "is the color ")
    return `bg-[${this.color}]`

  }
  // right here we have to fix this part to make the color dynmic it actually console.log right but it's not assigning it to the div text
  getTextColor() {
    return `text-[${this.color}]`
  }
  // Call me if there's any problem :-)

}
