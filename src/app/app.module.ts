import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./Engine/modules/material.module";
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { StockComponent } from './Dirs/stock/stock.component';
import { MainComponent } from './Dirs/main/main.component';
import { AssetComponent } from './Dirs/asset/asset.component';
import { StockDetailComponent } from './Dirs/stock-detail/stock-detail.component';
import { StockInfoComponent } from './Dirs/stock-info/stock-info.component';
import { StockChartComponent } from './Dirs/stock-chart/stock-chart.component';
import { PredictModuleComponent } from './Dirs/predict-module/predict-module.component';
import { StockTechComponent } from './Dirs/stock-tech/stock-tech.component';
import { StockPortfolioComponent } from './Dirs/stock-portfolio/stock-portfolio.component';
import { StockWatchlistComponent } from './Dirs/stock-watchlist/stock-watchlist.component';
import { StockPredictComponent } from './Dirs/stock-predict/stock-predict.component';
import { FinancialStatementComponent } from './Dirs/stock-info/financial-statement/financial-statement.component';
import { FilterPipe } from './Dirs/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    StockComponent,
    MainComponent,
    AssetComponent,
    StockDetailComponent,
    StockInfoComponent,
    StockChartComponent,
    PredictModuleComponent,
    StockTechComponent,
    StockPortfolioComponent,
    StockWatchlistComponent,
    StockPredictComponent,
    FinancialStatementComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
