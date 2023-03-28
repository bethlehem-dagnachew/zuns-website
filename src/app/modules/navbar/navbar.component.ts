import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showMobileNav: boolean = false;
  constructor(private router: Router) {

  }

  toggleNav() {
    this.showMobileNav = !this.showMobileNav;
  }

  home() {
    this.router.navigateByUrl('home')
  }
}
