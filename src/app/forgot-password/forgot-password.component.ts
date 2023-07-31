import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string;
  error: any;
  message: any;
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {}

  forgotPassword() {
    this.employeeService.forgotPassword(this.email).subscribe(
      (response: any) => {
        // Handle success response
        this.message = response.message;
        this.error = null;
      },
      (error: any) => {
        // Handle error response
        this.error = error.error.message;
        this.message = null;
      }
    );
  }
}
