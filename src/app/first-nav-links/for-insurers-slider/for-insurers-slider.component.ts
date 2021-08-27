import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-for-insurers-slider',
  templateUrl: './for-insurers-slider.component.html',
  styleUrls: ['./for-insurers-slider.component.css'],
})
export class ForInsurersSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
