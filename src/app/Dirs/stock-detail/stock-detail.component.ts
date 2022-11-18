import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {
  code = "AAPL";
  name = "Apple.Inc"

  stocks = [{
    code: "AAPL",
    name: "Apple.Inc",
    price: 146.87,
    change: -8.4,
    percentage: -5.59,
  }];


  constructor() { }

  ngOnInit(): void {
  }

}
