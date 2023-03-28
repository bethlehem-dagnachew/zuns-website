import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @Input() landingText: string = 'Zuns Business Group';
  @Input() color: string = 'greenwood';
  @Input() description: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autconsequatur
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

    switch (this.color) {
      case '1':
        return `bg-[#9333ea]`;
        break;
      case '2':
        return `bg-[#f2d172]`;
        break;
      case '3':
        return `bg-[#ed2647]`;
        break;


    }

    return `bg-[#6dc241]`


  }
  // right here we have to fix this part to make the color dynmic it actually console.log right but it's not assigning it to the div text
  getTextColor() {

    switch (this.color) {
      case '1':
        return `text-[#9333ea]`

        break;
      case '2':
        return `text-[#f2d172]`

        break;
      case '3':
        return `text-[#ed2647]`

        break;


    }

    return `text-[#6dc241]`

  }
  // Call me if there's any problem :-)

}
