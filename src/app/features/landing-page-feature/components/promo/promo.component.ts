import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss'],
  imports: [CommonModule]
})
export class PromoComponent implements OnInit {
  promoProducts = ["product1", "product2", "product3"];

  constructor() { }

  ngOnInit() {
  }

}
