import { Injectable } from '@angular/core';
import { Indices, Stock, Crypto, Asset, Holdings, FinancialStatement, Analysis } from "./Engine/interfaces/stock";
import { INDICES, STOCKS, CRYPTO, ASSET, HOLDINGS, FS } from "./Engine/models/mock-stock";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  getIndices(): Indices[] {
    return INDICES;
  }

  getStocks(): Stock[] {
    return STOCKS;
  }

  getCrypto(): Crypto[] {
    return CRYPTO;
  }

  constructor() { }
}
