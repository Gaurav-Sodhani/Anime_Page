import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NarutoComponent } from './naruto/naruto.component';

const routes: Routes = [
  { path: 'naruto', component: NarutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
