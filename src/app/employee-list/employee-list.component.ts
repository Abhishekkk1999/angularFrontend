import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  message:String;
  
  constructor(private employeeService: EmployeeService,
              private router:Router){}
  ngOnInit(){
    this.getEmployees();
}
public getEmployees(){
  this.employeeService.getEmployeesList().subscribe(data =>
     {
      this.employees = data;
    });
     
}

ondelete(id: number){
      this.employeeService.deleteEmp(id).subscribe(
        (res)=>{
       this.message=res;
       this.ngOnInit();
        }
      );
}

}


