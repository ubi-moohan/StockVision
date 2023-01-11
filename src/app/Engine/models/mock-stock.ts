import {Indices, Stocks, Crypto, Asset, Holdings, FinancialStatement} from "../interfaces/stock";

export const INDICES: Indices[] = [
  { date: 221107, code: 'S&P 500', open: 3888.04, close: 3748.57, high: 3918.42, low: 3732.87 }
]

export const STOCKS: Stocks[] = [
  { date: 221107, code: 'AAPL', name: 'Apple.Inc', open: 141.34, close: 134.87, high: 143.14, low: 134.54 },
  { date: 221107, code: 'GOOGL', name: 'Alphabet', open: 141.34, close: 134.87, high: 143.14, low: 134.54 },
  { date: 221107, code: 'AMZN', name: 'Amazon', open: 141.34, close: 134.87, high: 143.14, low: 134.54 },
  { date: 221107, code: 'MSFT', name: 'Microsoft Corporation', open: 247.58, close: 242.4, high: 248.71, low: 242.3 },
]

export const CRYPTO: Crypto[] = [
  { name: 'Bitcoin', code: 'BTC', price: 17741, cap: 341, vol: 99, change: 3.86 },
  { name: 'Ethereum', code: 'ETH', price: 1315, cap: 162, vol: 34, change: 11.6 }
]

export const HOLDINGS: Holdings[] = [
  { code: "AAPL", name: "Apple.Inc", curPrice: 146.87, avgPrice: 154.32, quantity: 100 },
  { code: 'GOOGL', name: 'Alphabet.Inc', curPrice: 141.34, avgPrice: 164.21, quantity: 70 },
  { code: 'AMZN', name: 'Amazon', curPrice: 126.34, avgPrice: 98.20, quantity: 50 },
  { code: 'MSFT', name: 'Microsoft Corporation', curPrice: 247.58, avgPrice:261.15, quantity: 60 },
  { code: 'MSFT', name: 'Microsoft Corporation', curPrice: 247.58, avgPrice:261.15, quantity: 60 },
  { code: 'MSFT', name: 'Microsoft Corporation', curPrice: 247.58, avgPrice:261.15, quantity: 60 },
]

export const ASSET: Asset[] = [
  { total: 50682, change: 3082, percentage: 5.99 }
]

export const FS: FinancialStatement[] = [
  { FY: 2022, totalRevenue: 394328000, costRevenue: 223546000, operatingIncome: 119437000, EBIT: 122034000, EBITDA: 133138000, netIncome: 9980300, totalAsset: 352755000, liability: 302083000, equity: 5067200, stockEquity: 50672000, shares: 15943425, OCF: 122151000, CAPEX: -10708000, FCF: 111443000, EPS: 2.1, ROA: 21.21, ROE: 175.46, PSR: 5.37, PBR: 40.69, trailingPER: 21.21, forwardPER: 21.23 },
  { FY: 2021, totalRevenue: 394328000, costRevenue: 223546000, operatingIncome: 119437000, EBIT: 122034000, EBITDA: 133138000, netIncome: 9980300, totalAsset: 352755000, liability: 302083000, equity: 5067200, stockEquity: 50672000, shares: 15943425, OCF: 122151000, CAPEX: -10708000, FCF: 111443000, EPS: 2.1, ROA: 21.21, ROE: 175.46, PSR: 5.37, PBR: 40.69, trailingPER: 21.21, forwardPER: 21.23 },
  { FY: 2020, totalRevenue: 394328000, costRevenue: 223546000, operatingIncome: 119437000, EBIT: 122034000, EBITDA: 133138000, netIncome: 9980300, totalAsset: 352755000, liability: 302083000, equity: 5067200, stockEquity: 50672000, shares: 15943425, OCF: 122151000, CAPEX: -10708000, FCF: 111443000, EPS: 2.1, ROA: 21.21, ROE: 175.46, PSR: 5.37, PBR: 40.69, trailingPER: 21.21, forwardPER: 21.23 },
  { FY: 2019, totalRevenue: 394328000, costRevenue: 223546000, operatingIncome: 119437000, EBIT: 122034000, EBITDA: 133138000, netIncome: 9980300, totalAsset: 352755000, liability: 302083000, equity: 5067200, stockEquity: 50672000, shares: 15943425, OCF: 122151000, CAPEX: -10708000, FCF: 111443000, EPS: 2.1, ROA: 21.21, ROE: 175.46, PSR: 5.37, PBR: 40.69, trailingPER: 21.21, forwardPER: 21.23 },
  { FY: 2018, totalRevenue: 394328000, costRevenue: 223546000, operatingIncome: 119437000, EBIT: 122034000, EBITDA: 133138000, netIncome: 9980300, totalAsset: 352755000, liability: 302083000, equity: 5067200, stockEquity: 50672000, shares: 15943425, OCF: 122151000, CAPEX: -10708000, FCF: 111443000, EPS: 2.1, ROA: 21.21, ROE: 175.46, PSR: 5.37, PBR: 40.69, trailingPER: 21.21, forwardPER: 21.23 },
  { FY: 2017, totalRevenue: 394328000, costRevenue: 223546000, operatingIncome: 119437000, EBIT: 122034000, EBITDA: 133138000, netIncome: 9980300, totalAsset: 352755000, liability: 302083000, equity: 5067200, stockEquity: 50672000, shares: 15943425, OCF: 122151000, CAPEX: -10708000, FCF: 111443000, EPS: 2.1, ROA: 21.21, ROE: 175.46, PSR: 5.37, PBR: 40.69, trailingPER: 21.21, forwardPER: 21.23 },
  { FY: 2016, totalRevenue: 394328000, costRevenue: 223546000, operatingIncome: 119437000, EBIT: 122034000, EBITDA: 133138000, netIncome: 9980300, totalAsset: 352755000, liability: 302083000, equity: 5067200, stockEquity: 50672000, shares: 15943425, OCF: 122151000, CAPEX: -10708000, FCF: 111443000, EPS: 2.1, ROA: 21.21, ROE: 175.46, PSR: 5.37, PBR: 40.69, trailingPER: 21.21, forwardPER: 21.23 },
  { FY: 2015, totalRevenue: 394328000, costRevenue: 223546000, operatingIncome: 119437000, EBIT: 122034000, EBITDA: 133138000, netIncome: 9980300, totalAsset: 352755000, liability: 302083000, equity: 5067200, stockEquity: 50672000, shares: 15943425, OCF: 122151000, CAPEX: -10708000, FCF: 111443000, EPS: 2.1, ROA: 21.21, ROE: 175.46, PSR: 5.37, PBR: 40.69, trailingPER: 21.21, forwardPER: 21.23 },
  { FY: 2014, totalRevenue: 394328000, costRevenue: 223546000, operatingIncome: 119437000, EBIT: 122034000, EBITDA: 133138000, netIncome: 9980300, totalAsset: 352755000, liability: 302083000, equity: 5067200, stockEquity: 50672000, shares: 15943425, OCF: 122151000, CAPEX: -10708000, FCF: 111443000, EPS: 2.1, ROA: 21.21, ROE: 175.46, PSR: 5.37, PBR: 40.69, trailingPER: 21.21, forwardPER: 21.23 },
  { FY: 2013, totalRevenue: 394328000, costRevenue: 223546000, operatingIncome: 119437000, EBIT: 122034000, EBITDA: 133138000, netIncome: 9980300, totalAsset: 352755000, liability: 302083000, equity: 5067200, stockEquity: 50672000, shares: 15943425, OCF: 122151000, CAPEX: -10708000, FCF: 111443000, EPS: 2.1, ROA: 21.21, ROE: 175.46, PSR: 5.37, PBR: 40.69, trailingPER: 21.21, forwardPER: 21.23 },
  { FY: 2012, totalRevenue: 394328000, costRevenue: 223546000, operatingIncome: 119437000, EBIT: 122034000, EBITDA: 133138000, netIncome: 9980300, totalAsset: 352755000, liability: 302083000, equity: 5067200, stockEquity: 50672000, shares: 15943425, OCF: 122151000, CAPEX: -10708000, FCF: 111443000, EPS: 2.1, ROA: 21.21, ROE: 175.46, PSR: 5.37, PBR: 40.69, trailingPER: 21.21, forwardPER: 21.23 },
]
