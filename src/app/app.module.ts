import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {PostPageComponent} from './pages/post-page/post-page.component';
import {HeaderComponent} from './components/header/header.component';
import {UsersComponent} from './components/users/users/users.component';
import {UserComponent} from './components/users/user/user.component';
import {UserDetailsComponent} from './components/users/user-details/user-details.component';
import {UserDetailsPageComponent} from './pages/user-details-page/user-details-page.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', component: UserPageComponent, children: [
          {path: ':id', component: UserDetailsPageComponent}
        ]
      },
      {path: 'posts', component: PostPageComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    UserPageComponent,
    PostPageComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
