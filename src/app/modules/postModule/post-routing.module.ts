import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostPageComponent} from "./pages/post-page/post-page.component";

const routes: Routes = [
  {path: '', component: PostPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
