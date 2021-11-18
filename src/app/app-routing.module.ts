import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterCustomersComponent } from './register-customers/register-customers.component';


const routes: Routes = [
  {path:'register-customers', component:RegisterCustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
