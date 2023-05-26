import {ResolveFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {ICar} from "../../interfaces";
import {CarService} from "../car.service";

export const carResolver: ResolveFn<ICar> = (route, state) => {
  const car = inject(Router).getCurrentNavigation()?.extras.state as ICar;

  if (car) {
    return car
  }
  const {id} = route.params;
  return inject(CarService).getById(id)
};
