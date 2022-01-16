import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors.component';
import { FavorateAuthorsComponent } from './favorate-authors/favorate-authors.component';

const routes: Routes = [
  { path: '', component: AuthorsComponent },
  {path:'favorate',component:FavorateAuthorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
