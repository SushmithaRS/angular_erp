import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';

const routes: Routes = [
{path:'employees',component:EmployeeListComponent},
{path:'create-employee',component:CreateEmployeeComponent},
{path:'employee-details/:id',component:EmployeeDetailsComponent},
//{path:'login',component:LoginComponent}
//{path:'',redirectTo:'employees',pathMatch:'full'}
{path:'forgot-password',component:ForgotPasswordComponent},
{path:'reset-password-form',component:ResetPasswordFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
