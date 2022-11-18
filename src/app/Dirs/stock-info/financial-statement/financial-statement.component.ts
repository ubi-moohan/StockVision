import {Component} from '@angular/core';

export interface FinancialStatement {
  year: number;
  revenue: number;
  grossmargin: number;
  ebt:number;
  ebtmargin:number;
  netincome:number;
  capex:number;
  shares: number;
  roa:number;
  roic:number;
  roe:number;
}

const FS_DATA: FinancialStatement[] = [
  {year: 2022, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2021, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2020, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2019, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2018, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2017, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2016, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2015, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
  {year: 2014, revenue: 394328, grossmargin: 43.31, ebt: 119103.00, ebtmargin: 30.20, netincome: 99803.00, capex: 0.66, shares: 16216.00, roa: 28.36, roic: 55.36, roe: 175.46,},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-financial-statement',
  styleUrls: ['financial-statement.component.scss'],
  templateUrl: 'financial-statement.component.html',
})
export class FinancialStatementComponent {

  displayedColumns: string[] = ['year', 'revenue', 'grossmargin', 'ebt', 'ebtmargin', 'netincome', 'capex', 'shares', 'roa', 'roic', 'roe'];
  dataSource = FS_DATA;

}
