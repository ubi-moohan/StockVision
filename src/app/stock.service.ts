import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Indices, Stocks, Crypto, Asset, Holdings, FinancialStatement, Analysis } from "./Engine/interfaces/stock";
import { INDICES, STOCKS, CRYPTO, ASSET, HOLDINGS, FS } from "./Engine/models/mock-stock";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  getIndices(): Observable<Indices[]> {
    const indices = of(INDICES)
    return indices;
  }

  getStocks(): Observable<Stocks[]> {
    const stocks = of(STOCKS)
    return stocks;
  }

  getStock(code: any): Observable<Stocks> {
    const stock = STOCKS.find(h => h.code === code)!;
    return of(stock);
  }

  getCrypto(): Observable<Crypto[]> {
    const crypto = of(CRYPTO)
    return crypto;
  }

  getHoldings(): Observable<Holdings[]> {
    const holdings = of(HOLDINGS)
    return holdings;
  }

  // getTotal(): number {
  //   return HOLDINGS[0].shares * HOLDINGS[0].price
  // }

  getCurTotalAsset(): number {
    let total = 0;
    for (let index of HOLDINGS) {
      total += (index.curPrice * index.quantity)
    }
    return total
  }

  getAvgTotalAsset(): number {
    let total = 0;
    for (let index of HOLDINGS) {
      total += (index.avgPrice * index.quantity)
    }
    return total
  }

  constructor() { }
}
