import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForInsurersSliderComponent } from './for-insurers-slider.component';

describe('ForInsurersSliderComponent', () => {
  let component: ForInsurersSliderComponent;
  let fixture: ComponentFixture<ForInsurersSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForInsurersSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForInsurersSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
