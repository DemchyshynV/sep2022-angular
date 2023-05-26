import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarPageComponent } from './pages/car-page/car-page.component';
import { CarsComponent } from './components/cars/cars.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CarComponent } from './components/car/car.component';
import {MatButtonModule} from "@angular/material/button";
import { CarEditPageComponent } from './pages/car-edit-page/car-edit-page.component';
import { CarEditFormComponent } from './components/car-edit-form/car-edit-form.component';


@NgModule({
  declarations: [
    CarPageComponent,
    CarsComponent,
    CarComponent,
    CarEditPageComponent,
    CarEditFormComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class CarsModule { }
