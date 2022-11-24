import { Component, OnInit, Input } from '@angular/core';

import { Holdings } from "../../Engine/interfaces/stock";
import { StockService } from "../../stock.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  holdings: Holdings[] = [];

  constructor(private stockService: StockService) { }

  getHoldings(): void{
    this.stockService.getHoldings()
      .subscribe(holdings => this.holdings = holdings);
  }

  ngOnInit(): void {
    this.getHoldings()
  }

}
