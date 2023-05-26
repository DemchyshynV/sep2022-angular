import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ICar} from "../../../../interfaces";

@Component({
  selector: 'app-car-edit-form',
  templateUrl: './car-edit-form.component.html',
  styleUrls: ['./car-edit-form.component.css']
})
export class CarEditFormComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICar) {
  }
}
