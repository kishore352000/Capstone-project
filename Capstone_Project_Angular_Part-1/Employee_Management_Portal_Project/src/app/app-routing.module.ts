import {Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ContactComponent } from './contact/contact.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'employees', component:EmployeeDataComponent
  },
{
  path:'employees/addemployee', component:AddEmployeeComponent
},
{
  path:'employees/editemployee/:id', component:EditEmployeeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
