import { Component, OnInit } from '@angular/core';

import { Holdings } from "../../Engine/interfaces/stock";
import { StockService } from "../../stock.service";

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {
  code = "AAPL";
  name = "Apple.Inc"

  holdings: Holdings[] = [];

  constructor(private stockService: StockService) { }

  getHoldings(): void {
    this.stockService.getHoldings()
      .subscribe(holdings => this.holdings = holdings)
  }

  ngOnInit(): void {
    this.getHoldings()
  }

}
