import { Component, OnInit } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { FlashSaleSectionComponent } from "../../components/flash-sale-section/flash-sale-section.component";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [HeroComponent, FlashSaleSectionComponent]
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
