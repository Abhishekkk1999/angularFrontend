import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  employees: Employee[];


  constructor(private employeeService: EmployeeService){}
ngOnInit(){
this.getEmployees();
}
public getEmployees(){
this.employeeService.getEmployeesList().subscribe(data =>
{
this.employees = data;
});

}

}
