import { Component, OnInit, Input } from '@angular/core';

import { HOLDINGS } from "../../Engine/models/mock-stock";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stocks = [{
    code: "AAPL",
    name: "Apple.Inc",
    price: 146.87,
    change: -8.4,
    percentage: -5.59,
  },
    { code: 'GOOGL', name: 'Alphabet.Inc', price: 141.34, change: -4.3, percentage: -4.3 },
    { code: 'AMZN', name: 'Amazon', price: 126.34, change: -3.3, percentage: -5 },];

  constructor() { }

  ngOnInit(): void {
  }

}
