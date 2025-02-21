import { Component, OnInit } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { FlashSaleSectionComponent } from "../../components/flash-sale-section/flash-sale-section.component";
import { BrandsComponent } from "../../components/brands/brands.component";
import { NewProductComponent } from "../../components/new-product/new-product.component";
import { FeaturesComponent } from "../../components/features/features.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { PromoComponent } from "../../components/promo/promo.component";
import { NewsComponent } from "../../components/news/news.component";
import { UtilitiesComponent } from "../../components/utilities/utilities.component";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [HeroComponent, FlashSaleSectionComponent, BrandsComponent, NewProductComponent, FeaturesComponent, BannerComponent, PromoComponent, NewsComponent, UtilitiesComponent]
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
