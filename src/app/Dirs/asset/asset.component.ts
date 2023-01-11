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
  console = console;
  title = "ASSET";

  dateObj = Date.now()
  curTotal: number = this.getCurTotalAsset()
  avgTotal: number = this.getAvgTotalAsset()

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    // this.getCurTotalAsset()
  }
  getCurTotalAsset(): number {
    return this.stockService.getCurTotalAsset()
  }

  getAvgTotalAsset(): number {
    return this.stockService.getAvgTotalAsset()
  }

}
