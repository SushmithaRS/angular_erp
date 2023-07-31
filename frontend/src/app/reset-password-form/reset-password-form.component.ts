import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent {
  id: number;
  password: string;
  confirmPassword: string;
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {}

  checkPasswordMatch(confirmPasswordInput: HTMLInputElement | string) {
    if (typeof confirmPasswordInput === 'string') {
      confirmPasswordInput = document.getElementById(confirmPasswordInput) as HTMLInputElement;
    }

    const passwordInput = document.getElementById('password') as HTMLInputElement;

    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordInput.setCustomValidity('Passwords do not match!');
    } else {
      confirmPasswordInput.setCustomValidity('');
    }
  }

  resetPassword() {
    // Call the updatePassword method from the EmployeeService
    this.employeeService.updatePassword(this.id, this.password).subscribe(
      () => {
        console.log('Password updated successfully');
      },
      (error) => {
        console.error('Error updating password:', error);
      }
    );
  }
}
