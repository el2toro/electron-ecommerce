import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [FontAwesomeModule]
})
export class NavbarComponent implements OnInit {
  faHeadset = faHeadset;
  faCartShopping = faCartShopping;

  constructor() { }

  ngOnInit() {
  }

}
