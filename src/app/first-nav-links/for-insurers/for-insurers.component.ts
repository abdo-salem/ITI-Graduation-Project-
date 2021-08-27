import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-for-insurers',
  templateUrl: './for-insurers.component.html',
  styleUrls: ['./for-insurers.component.css'],
})
export class ForInsurersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
