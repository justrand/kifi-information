import { LibraryDetailComponent } from './library-detail/library-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrariesComponent } from './libraries/libraries.component';

const routes: Routes = [
  { path: 'libraries', component: LibrariesComponent },
  { path: 'detail/:id', component: LibraryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
