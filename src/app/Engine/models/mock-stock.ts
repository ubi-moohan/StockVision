import {Indices, Stock, Crypto, Asset, Holdings, FinancialStatement} from "../interfaces/stock";

export const INDICES: Indices[] = [
  { date: 221107, code: 'S&P 500', open: 3888.04, close: 3748.57, high: 3918.42, low: 3732.87 }
]

export const STOCKS: Stock[] = [
  { date: 221107, code: 'AAPL', open: 141.34, close: 134.87, high: 143.14, low: 134.54 },
  { date: 221107, code: 'GOOGL', open: 141.34, close: 134.87, high: 143.14, low: 134.54 },
  { date: 221107, code: 'AMZN', open: 141.34, close: 134.87, high: 143.14, low: 134.54 },
]

export const CRYPTO: Crypto[] = [
  { name: 'Bitcoin', code: 'BTC', price: 17741, cap: 341, vol: 99, change: 3.86 },
  { name: 'Ethereum', code: 'ETH', price: 1315, cap: 162, vol: 34, change: 11.6 }
]

export const HOLDINGS: Holdings[] = [
  { code: "AAPL", name: "Apple.Inc", price: 146.87, change: -8.4, percentage: -5.59 }
]

export const ASSET: Asset[] = [
  { total: 50682, change: 3082, percentage: 5.99 }
]

export const FS: FinancialStatement[] = [
  {year: 2022, revenue: 394328.00, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2021, revenue: 394328.00, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2020, revenue: 394328.00, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2019, revenue: 394328.00, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2018, revenue: 394328.00, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2017, revenue: 394328.00, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2016, revenue: 394328.00, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2015, revenue: 394328.00, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2014, revenue: 394328.00, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
]
