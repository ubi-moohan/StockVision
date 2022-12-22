import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Indices, Stock, Crypto, Asset, Holdings, FinancialStatement, Analysis } from "./Engine/interfaces/stock";
import { INDICES, STOCKS, CRYPTO, ASSET, HOLDINGS, FS } from "./Engine/models/mock-stock";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  getIndices(): Observable<Indices[]> {
    const indices = of(INDICES)
    return indices;
  }

  getStocks(): Observable<Stock[]> {
    const stocks = of(STOCKS)
    return stocks;
  }

  getStock(code: any): Observable<Stock> {
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

  constructor() { }
}
