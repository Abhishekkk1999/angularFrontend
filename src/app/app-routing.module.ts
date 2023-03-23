import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateComponent } from './update/update.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:"employees",component:EmployeeListComponent},
  {path:"",redirectTo:"employees", pathMatch: 'full'},
  {path: "create-employee",component: CreateEmployeeComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"details/:id",component:UserDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
