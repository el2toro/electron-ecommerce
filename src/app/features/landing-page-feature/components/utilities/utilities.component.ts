import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Utility{
  image: string;
  title: string;
}

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss'],
  imports: [CommonModule]
})
export class UtilitiesComponent implements OnInit {
  utilities = <Utility[]>[];
  constructor() { }

  ngOnInit() {
    this.initUtilities()
  }

  initUtilities(){
    this.utilities = [
      { image: 'support', title: 'Support Center' },
      { image: 'order_status', title: 'Order Status' },
      { image: 'store', title: 'Store Pickup' },
      { image: 'price', title: 'Best Price' },
      { image: 'return', title: 'Returns & Exchanges' }
    ]
  }
}
