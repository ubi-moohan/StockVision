export interface Indices {
  date: number;
  code: string;
  open: number;
  close: number;
  high: number;
  low: number;

}

export interface Stocks {
  date: number;
  code: string;
  name: string;
  open: number;
  close: number;
  high: number;
  low: number;
}

export interface Crypto {
  name: string;
  code: string;
  price: number;
  cap: number;
  vol: number;
  change: number;
}


export interface Holdings {
  code: string;
  name: string;
  curPrice: number;
  avgPrice: number;
  quantity: number;
}

export interface Asset {
  total: number;
  change: number;
  percentage: number;
}

export interface Analysis {
  name: string,
  completed: boolean,
  subanalysis?: Analysis[];
}

export interface FinancialStatement {
  FY: number, // 회계 연도, Fiscal Year
  totalRevenue: number, // 총 매출
  costRevenue: number, // 매출 원가
  operatingIncome: number, // 영업 이익
  EBIT: number, // Earnings before interest and taxes
  EBITDA: number,
  netIncome: number, // 당기순이익
  totalAsset: number, //총 자산
  liability: number, //부채
  equity: number, //자본
  stockEquity: number, //주 당 자본
  shares: number, //발행 주식 수
  OCF: number, //영업현금흐름 operatingCashFlow
  CAPEX: number,//capital expenditure
  FCF: number, //Free Cash Flow
  EPS: number, //earnings per share
  ROA: number, //Return on assets
  ROE: number, //Return on equity
  PSR: number, // Price/Sales 주가매출비율
  PBR: number, //Price to book ratio 주가순자산비율
  trailingPER: number,
  forwardPER: number,

}
