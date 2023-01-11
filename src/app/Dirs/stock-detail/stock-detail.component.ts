import {Component, NgModule, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Holdings, Stocks } from "../../Engine/interfaces/stock";
import { StockService } from "../../stock.service";

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {
  name = "Apple.Inc"

  holdings: Holdings[] = [];
  stock: Stocks | null = null;

  console = console;

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private location: Location,
    ) { }

  getHoldings(): void {
    this.stockService.getHoldings()
      .subscribe(holdings => this.holdings = holdings)
  }

  getStock(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.stockService.getStock(code)
      .subscribe((res) => this.stock = (res));
  }

  ngOnInit(): void {
    this.getHoldings()
    this.getStock()
  }

}

