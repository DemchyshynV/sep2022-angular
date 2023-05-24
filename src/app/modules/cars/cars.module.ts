import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarPageComponent } from './pages/car-page/car-page.component';
import { CarsComponent } from './components/cars/cars.component';


@NgModule({
  declarations: [
    CarPageComponent,
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
