import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPredictComponent } from './stock-predict.component';

describe('StockPredictComponent', () => {
  let component: StockPredictComponent;
  let fixture: ComponentFixture<StockPredictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockPredictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
