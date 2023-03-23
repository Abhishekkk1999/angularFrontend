import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {NgForm} from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  message: String;

  employee: Employee = new Employee();
  constructor(private service: EmployeeService) {}
  ngOnInit(): void {
    
  }
  onSubmit(data:NgForm){
  this.service.addEmp(data.value).subscribe(
    (res)=>{
   
      if(res==0){
       this.message="success";
      }
      else{
        this.message="fail";
      }
    }
  );
  }

}
