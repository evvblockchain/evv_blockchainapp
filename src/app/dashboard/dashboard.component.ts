import { Component, OnInit } from '@angular/core';
import { config } from '../config/app.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  config=config;
  constructor() { }

  ngOnInit() {
  }

}
