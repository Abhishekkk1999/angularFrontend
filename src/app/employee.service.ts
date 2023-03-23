import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  private baseURL = "http://localhost:9092/api/v1/employees"

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  
  addEmp(emp:Employee){
    return this.httpClient.post(`${this.baseURL}`,emp);
  }

  deleteEmp(id: number){
    return this.httpClient.delete(`${this.baseURL}/${id}`,{responseType:"text"});
  }

  updateEmp(id: number, emp: Employee){
    return this.httpClient.put(`${this.baseURL}/${id}`,emp);
  }

  findEmp(id:number){
    return this.httpClient.get(`http://localhost:9092/api/v1/find/${id}`);
  }


}
