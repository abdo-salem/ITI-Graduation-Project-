import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDocsComponent } from './for-docs.component';

describe('ForDocsComponent', () => {
  let component: ForDocsComponent;
  let fixture: ComponentFixture<ForDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
