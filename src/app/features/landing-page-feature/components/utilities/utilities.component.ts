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
      { image: 'utility2', title: 'Order Status' },
      { image: 'utility3', title: 'Store Pickup' },
      { image: 'utility4', title: 'Price Match Guarantee' },
      { image: 'utility5', title: 'Returns & Exchanges' }
    ]
  }
}
