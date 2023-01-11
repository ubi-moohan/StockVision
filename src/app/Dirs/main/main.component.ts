import { Component, OnInit } from '@angular/core';

import { Indices, Stocks, Crypto } from "../../Engine/interfaces/stock";
import { StockService } from "../../stock.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  indices: Indices[] = [];
  stocks: Stocks[] = [];
  crypto: Crypto[] = [];

  selectedStock?: Stocks;

  constructor(private stockService: StockService) { }
  //: 뒤에는 타입이 들어가는 것 아닌가? StockService가 들어가고도 정상작동하는 이유.

  getIndices(): void{
    this.stockService.getIndices()
      .subscribe(indices => this.indices = indices);
  }

  getStocks(): void{
    this.stockService.getStocks()
      .subscribe(stocks => this.stocks = stocks);
  }

  getCrypto(): void{
    this.stockService.getCrypto()
      .subscribe(crypto => this.crypto = crypto);
  }

  ngOnInit(): void {
    this.getIndices()
    this.getStocks()
    this.getCrypto()
  }

  onSelect(stocks: Stocks): void {
    this.selectedStock = stocks;
  }

}
