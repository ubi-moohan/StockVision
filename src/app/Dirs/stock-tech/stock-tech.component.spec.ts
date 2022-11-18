import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTechComponent } from './stock-tech.component';

describe('StockTechComponent', () => {
  let component: StockTechComponent;
  let fixture: ComponentFixture<StockTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
