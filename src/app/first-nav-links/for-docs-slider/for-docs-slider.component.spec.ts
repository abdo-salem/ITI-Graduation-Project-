import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDocsSliderComponent } from './for-docs-slider.component';

describe('ForDocsSliderComponent', () => {
  let component: ForDocsSliderComponent;
  let fixture: ComponentFixture<ForDocsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForDocsSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDocsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
