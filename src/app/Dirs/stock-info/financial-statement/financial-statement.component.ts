import {Component} from '@angular/core';
import {FinancialStatement} from "../../../Engine/interfaces/stock";
import {FS} from "../../../Engine/models/mock-stock";

const FS_DATA: FinancialStatement[] = FS

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-financial-statement',
  styleUrls: ['financial-statement.component.scss'],
  templateUrl: 'financial-statement.component.html',
})
export class FinancialStatementComponent {

  displayedColumns: string[] = ['FY', 'totalRevenue', 'costRevenue', 'operatingIncome', 'EBIT', 'EBITDA', 'netIncome', 'totalAsset', 'liability', 'equity', 'stockEquity', 'shares', 'OCF', 'CAPEX', 'FCF', 'EPS', 'ROA', 'ROE', 'PSR', 'PBR', 'trailingPER', 'forwardPER'];
  dataSource = FS_DATA;

}
