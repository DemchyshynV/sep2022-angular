import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarPageComponent} from "./pages/car-page/car-page.component";
import {CarEditPageComponent} from "./pages/car-edit-page/car-edit-page.component";
import {carResolver} from "../../services";

const routes: Routes = [
  {
    path: '', component: CarPageComponent, children: [
      {path: ':id', component: CarEditPageComponent, resolve: {data: carResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {
}
