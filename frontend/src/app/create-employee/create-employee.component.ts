import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeComponent implements OnInit{
ngOnInit():void{
}
employee:Employee=new Employee();
constructor(private employeeService:EmployeeService,private router:Router) {}
saveEmployee()
{
this.employeeService.createEmployee(this.employee).subscribe(data=>{
  this.goToEmployeeList(); 
},error=>console.log(error));
}
onSubmit(){
console.log(this.employee);
this.saveEmployee();
}
goToEmployeeList(){
this.router.navigate(['/login']);
}
}
