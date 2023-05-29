import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {isAuthGuard} from "./guards/is-auth.guard";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
      {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
      {
        path: 'cars',
        canActivate: [isAuthGuard],
        loadChildren: () => import('./modules/cars/cars.module').then(m => m.CarsModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
