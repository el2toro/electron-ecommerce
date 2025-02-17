import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  imports: [CommonModule]
})
export class FeaturesComponent implements OnInit {
  offers = ["offer1", "offer2", "offer3", "offer4", "offer5", "offer6", "offer7", "offer8"];

  constructor() { }

  ngOnInit() {
  }

}
