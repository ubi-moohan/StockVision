import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictModuleComponent } from './predict-module.component';

describe('PredictModuleComponent', () => {
  let component: PredictModuleComponent;
  let fixture: ComponentFixture<PredictModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
