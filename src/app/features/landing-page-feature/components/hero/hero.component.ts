import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  private slideIndex = 0;

  constructor() { 

  }

  ngOnInit() {
    this.carousel();
  }

  carousel(){
    let bannerChilds = document.getElementsByClassName('banner')[0].children;
    let dots = document.getElementsByClassName('dots')[0].children;

    for(let i = 0; i < bannerChilds.length; i++){
      bannerChilds[i].classList.add('hide-banner');
      dots[i].classList.add('dot-inactive');
    }

    this.slideIndex++;

    if(this.slideIndex > bannerChilds.length){
      this.slideIndex = 1
    }

    bannerChilds[this.slideIndex - 1].classList.remove('hide-banner');
    bannerChilds[this.slideIndex - 1].classList.add('show-banner');

    dots[this.slideIndex - 1].classList.remove('dot-inactive');
    dots[this.slideIndex - 1].classList.add('dot-active');

    setTimeout(() => this.carousel(), 5000)
  }


  onClick(index: number){
    this.slideIndex = index;
    let bannerChilds = document.getElementsByClassName('banner')[0].children;
    bannerChilds[index - 1].classList.add('hide-banner');
    bannerChilds[index - 1].classList.remove('show-banner');
    bannerChilds[index].classList.remove('hide-banner');
    bannerChilds[index].classList.add('show-banner');
  }
}
