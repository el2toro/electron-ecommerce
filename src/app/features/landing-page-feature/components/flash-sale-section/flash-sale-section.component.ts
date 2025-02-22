import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, shareReplay } from 'rxjs';

interface Category{
  categoryName: string;
  categoryImage: string;
}

interface timeComponents {
  secondsToDday: number;
  minutesToDday: number;
  hoursToDday: number;
  //daysToDday: number;
}

@Component({
  selector: 'app-flash-sale-section',
  templateUrl: './flash-sale-section.component.html',
  styleUrls: ['./flash-sale-section.component.scss'],
  imports: [CommonModule]
})

export class FlashSaleSectionComponent implements OnInit {
  public timeLeft$!: Observable<timeComponents>;
  categories = <Category[]>[];
  
  zero = 0;
  constructor() { 
    this.timeLeft$ = interval(1000).pipe(
      map(x => this.calcDateDiff()),
      shareReplay(1)
    );
  }

  ngOnInit() {
    this.initCategories();
  }

  calcDateDiff(endDay: Date = new Date(2025, 2, 11)): timeComponents {
    const dDay = endDay.valueOf();
  
    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;
  
    const timeDifference = dDay - Date.now();
  
    // const daysToDday = Math.floor(
    //   timeDifference /
    //     (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    // );
  
    const hoursToDday = Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
        hoursInADay
    );
  
    const minutesToDday = Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
        secondsInAMinute
    );
  
    const secondsToDday =
      Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;
  
    return { secondsToDday, minutesToDday, hoursToDday };
  }

  initCategories(){
    this.categories = [
      { categoryName: 'Mobiles', categoryImage: 'phone.png' },
      { categoryName: 'Televisions', categoryImage: 'tv.png' },
      { categoryName: 'Laptops', categoryImage: 'laptop.png' },
      { categoryName: 'Air Conditioner', categoryImage: 'conditioner.png' },
      { categoryName: 'Refrigerators', categoryImage: 'refrigerator.png' },
      { categoryName: 'Washings', categoryImage: 'washing-machine.png' },
      { categoryName: 'Kitchen', categoryImage: 'kitchen.jpeg' }
    ]
  }
}
