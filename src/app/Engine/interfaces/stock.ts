export interface Indices {
  date: number;
  code: string;
  open: number;
  close: number;
  high: number;
  low: number;

}

export interface Stock {
  date: number;
  code: string;
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
  price: number;
  change: number;
  percentage: number
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
  year: number,
  revenue:number,
  grossmargin:number,
  ebt:number,
  ebtmargin:number,
  netincome:number,
  capex:number,
  shares: number,
  roa:number,
  roic:number,
  roe:number,
}
