import { Component, Input, OnInit } from '@angular/core';

import { Holdings } from "../../Engine/interfaces/stock";

@Component({
  selector: 'app-stock-watchlist',
  templateUrl: './stock-watchlist.component.html',
  styleUrls: ['./stock-watchlist.component.scss']
})
export class StockWatchlistComponent implements OnInit {
  @Input() holdings: Holdings[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
