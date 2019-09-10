import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgIfNgforComponent } from './ng-if-ngfor/ng-if-ngfor.component';


const routes: Routes = [
  { path: 'primeiro-componente', component: DataBindingComponent },
  { path: 'teste-if', component: NgIfNgforComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
