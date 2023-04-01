import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SpatialComponent} from  './spatial/spatial.component'
import { AppComponent } from './app.component';
import { GeoresourcesComponent } from './georesources/georesources.component';
const routes: Routes = [

  { path: 'spatial', component: SpatialComponent },
  { path: 'georesources', component: GeoresourcesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
