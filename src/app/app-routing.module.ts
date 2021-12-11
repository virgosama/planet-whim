import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlanetListComponent} from './components/planet-list/planet-list.component';


const routes: Routes = [
  // {
  //   path: 'multiselect',
  //   component: PlanetListComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
