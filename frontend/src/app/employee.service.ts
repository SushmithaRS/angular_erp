import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL="http://localhost:8080/api/v1/employees";
  constructor(private httpClient:HttpClient) { }
  public getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  createEmployee(employees:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employees);
  }
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    
  }
  getUserData(emailId:String,password:String){
    return this.httpClient.get(`${this.baseURL}/${emailId}/${password}`);
  }
  forgotPassword(emailId: string): Observable<any> {
    const url = `${this.baseURL}/forgot-password`;
    return this.httpClient.post(url, { emailId });
  }
  resetPassword(token: string, password: string): Observable<any> {
    const url = `${this.baseURL}/reset-password`;
    const body = { token, password };
    return this.httpClient.post(url, body);
  }
 
  updatePassword(id: number, newPassword: string): Observable<any> {
    const url = `${this.baseURL}/${id}/password`;
    const body = { password: newPassword };
    return this.httpClient.put(url, body);
  }
}
