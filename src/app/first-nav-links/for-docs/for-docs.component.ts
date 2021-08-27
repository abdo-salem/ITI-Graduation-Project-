import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-for-docs',
  templateUrl: './for-docs.component.html',
  styleUrls: ['./for-docs.component.css'],
})
export class ForDocsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
