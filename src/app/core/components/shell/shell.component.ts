import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  imports: [NavbarComponent, FooterComponent, RouterOutlet]
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
