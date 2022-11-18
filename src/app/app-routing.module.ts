import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./Dirs/main/main.component";
import { StockComponent } from "./Dirs/stock/stock.component";
import {StockDetailComponent} from "./Dirs/stock-detail/stock-detail.component";
import {StockPredictComponent} from "./Dirs/stock-predict/stock-predict.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'stock', component: StockComponent},
  { path: 'stock/detail/:code', component: StockDetailComponent},
  { path: 'stock/predict', component: StockPredictComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
