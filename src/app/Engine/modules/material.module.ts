import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTabsModule } from "@angular/material/tabs";
import { NgChartsModule } from "ng2-charts";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTableModule} from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import 'ng2-charts'

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule,
    NgChartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class MaterialModule { }
