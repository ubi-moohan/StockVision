import { Component, OnInit } from '@angular/core';

import { FinancialStatement } from "../../Engine/interfaces/stock";
import { FS } from "../../Engine/models/mock-stock";
//{Year: 2022, Revenue: 394328.00, GrossMargin: 43.31, EBT: 119103.00, EBTMargin: 30.20, NetIncome: 99803.00, PERation: 25.00, PSRatio: 5.62, PBRatio: 43.72, EVSales: 5.83, EVFCF: 20.63, RevenueSh: 24.32, EarningsSh: 6.15, CashFlowSh: 7.53, Capex: 0.66, Shares: 16216.00, ROA: 28.36, ROIC: 55.36, ROE: 175.46,},

// const fsData: FinancialStatement[] = [
//   {year: 2022, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
//   {year: 2021, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
//   {year: 2020, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
//   {year: 2019, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
//   {year: 2018, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
//   {year: 2017, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
//   {year: 2016, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
//   {year: 2015, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
//   {year: 2014, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
// ];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss']
})

export class StockInfoComponent implements OnInit {
  // displayedColumns: string[] = ['Year', 'Revenue', 'GrossMargin' , 'EBT' , 'EBTMargin' , 'NetIncome' , 'PERation' , 'PSRatio' , 'PBRatio' , 'EV/Sales' , 'EV/FCF' , 'Revenue/Sh' , 'Earnings/Sh' , 'CashFlow/Sh' , 'Capex' , 'Shares' , 'ROA' , 'ROIC' , 'ROE']
  // dataSource = fsData;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
