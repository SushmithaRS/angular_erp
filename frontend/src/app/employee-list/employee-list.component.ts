import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit{
employees:Employee[];
id:number;
constructor(private employeeService:EmployeeService,private router:Router ){}
  ngOnInit():void{
    
    this.getEmployees(this.id);
  }
  private getEmployees(id:number){
    this.employeeService.getEmployeesList().subscribe(data=>{
    this.employees=data;
     });}
 employeeDetails(id:number){
   this.router.navigate(['employee-details',id])
}
} 
