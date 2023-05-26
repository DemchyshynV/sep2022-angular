import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CarEditFormComponent} from "../../components/car-edit-form/car-edit-form.component";
import {ActivatedRoute, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-car-edit-page',
  template: '',
})
export class CarEditPageComponent implements OnInit {
  constructor(private matDialog: MatDialog, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      console.log(data);
      this.matDialog.open(CarEditFormComponent, {data})
    })
  }

}
