import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostPageComponent } from './pages/post-page/post-page.component';


@NgModule({
  declarations: [
    PostPageComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule {
  constructor() {
    console.log('PostModule');
  }
}
