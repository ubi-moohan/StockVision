import { Component, OnInit } from '@angular/core';

import { ASSET, HOLDINGS } from "../../Engine/models/mock-stock";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  holding = HOLDINGS;
  // asset 부분 수정 필요.
  // holding 연결 어떻게?
  asset = {
    total: 56723,
    change: 5093,
    percentage: 5.4
  };

  constructor() { }

  ngOnInit(): void {
  }

}
