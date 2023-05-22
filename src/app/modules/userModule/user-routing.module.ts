import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserPageComponent} from "./pages/user-page/user-page.component";
import {UserDetailsPageComponent} from "./pages/user-details-page/user-details-page.component";
import {userDetailResolver} from "../../services/resolves/user-detail.resolver";

const routes: Routes = [
  {
    path: '', component: UserPageComponent, children: [
      {path: ':id', component: UserDetailsPageComponent, resolve: {userData: userDetailResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
