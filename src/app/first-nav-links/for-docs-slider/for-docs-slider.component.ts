import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-for-docs-slider',
  templateUrl: './for-docs-slider.component.html',
  styleUrls: ['./for-docs-slider.component.css'],
})
export class ForDocsSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
