import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  date!: string;

  constructor() {}

  ngOnInit(): void {
    this.date = moment().add(7, 'day').format('DD-MM-yyyy');
  }
}
