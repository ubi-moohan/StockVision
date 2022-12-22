import { Component, Input, OnInit } from '@angular/core';

import { Holdings, Analysis } from "../../Engine/interfaces/stock";
import {ThemePalette} from "@angular/material/core";

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-stock-tech',
  templateUrl: './stock-tech.component.html',
  styleUrls: ['./stock-tech.component.scss']
})
export class StockTechComponent implements OnInit {
  @Input() searchedCode: Holdings[] = [];


  analysis: Analysis = {
    name: 'Select All',
    completed: false,
    subanalysis: [
      { name: 'MACD', completed: false},
      { name: 'Ballinger Band', completed: false},
      { name: 'Relative Strength Index (RSI)', completed: false},
      { name: 'Slow Stochastic', completed: false},
      { name: 'Ichimoku Cloud', completed: false},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.analysis.subanalysis != null && this.analysis.subanalysis.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.analysis.subanalysis == null) {
      return false;
    }
    return this.analysis.subanalysis.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.analysis.subanalysis == null) {
      return;
    }
    this.analysis.subanalysis.forEach(t => (t.completed = completed));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
