import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutingModule } from './Pages/home/home.routing'

const routes: Routes = [

];

@NgModule({
  imports: [
    HomeRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
