import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../../../interfaces";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  @Input()
  cars: ICar[];
  panelOpenState = false;

  ngOnInit(): void {
  }

}
