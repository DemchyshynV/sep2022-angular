import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input()
  car: ICar;

  @Output()
  carForUpdate = new EventEmitter<ICar>();

  setCarForUpdate(): void {
    this.carForUpdate.emit(this.car)
  }
}
