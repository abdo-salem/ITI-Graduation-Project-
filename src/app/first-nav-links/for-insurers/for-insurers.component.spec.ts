import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForInsurersComponent } from './for-insurers.component';

describe('ForInsurersComponent', () => {
  let component: ForInsurersComponent;
  let fixture: ComponentFixture<ForInsurersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForInsurersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForInsurersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
