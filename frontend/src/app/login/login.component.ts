import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {
  model:any={}
  getData:any;
  employees:Employee[];
  constructor(private employeeService:EmployeeService,private router:Router ){}
ngOnInit(): void {
}
loginUser(){

  const emailId=this.model.emailId;
  const password=this.model.password;
  this.employeeService.getUserData(emailId,password).subscribe((data:any)=>{
    this.getData=data as boolean;
    if(this.getData==true)
    {
      this.router.navigate(["/employees"]);
    }
    else{
      alert("Invalid Email or Password");
    }
  });
}
}

