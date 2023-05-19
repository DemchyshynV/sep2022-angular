import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserPageComponent} from "./pages/user-page/user-page.component";
import {UserDetailsPageComponent} from "./pages/user-details-page/user-details-page.component";

const routes: Routes = [
  {
    path: '', component: UserPageComponent, children: [
      {path: ':id', component: UserDetailsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
