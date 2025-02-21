import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  imports: [CommonModule]
})
export class NewsComponent implements OnInit {
  news = ['news1', 'news2', 'news1', 'news2'];
  constructor() { }

  ngOnInit() {
  }

}
