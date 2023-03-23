import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
id:number;
emp:Employee=new Employee();

  constructor(private service : EmployeeService,
              private route:ActivatedRoute,
              private router:Router){}


  ngOnInit(){
this.route.params.subscribe((res:any)=>{
  this.id=res['id']
  this.service.findEmp(res['id']).subscribe((data:any)=>{
    this.emp=data;
  });
});

  }



  onupdate(data:NgForm){
    this.service.updateEmp(this.id,data.value).subscribe(
      (res)=>{
        this.router.navigateByUrl("/");
      }
    );
   
  }

}
