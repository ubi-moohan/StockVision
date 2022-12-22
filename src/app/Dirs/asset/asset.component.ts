import { Component, Input, OnInit } from '@angular/core';

import { Holdings } from "../../Engine/interfaces/stock";
import { StockService } from "../../stock.service";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})

// export interface TotalAsset {
//   total: number;
// }

export class AssetComponent implements OnInit {
  @Input() holdings: Holdings[] = [];

  title = "ASSET";

  // total: number = this.getTotalAsset();

  constructor(private stockService: StockService, /*public price: number, public shares: number*/) { }

  getHoldings(): void{
    this.stockService.getHoldings()
      .subscribe(holdings => this.holdings = holdings)
  }

  // getTotalAsset(): number {
  //   this.total = `${this.price*this.shares}`
  // }

  ngOnInit(): void {
    this.getHoldings()
  }

}
