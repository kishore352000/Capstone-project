import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { Employee } from '../models/employee.model';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest: Employee ={
    id:'',
    name:'',
    role:'',
    email:'',
    phone:''
  };
  alert:boolean=false;
  

  constructor(private employeeService: EmployeesService ,private httpClientModule: HttpClientModule, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee(){
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (employee) =>{
        this.alert=true;

      }
    });
  }

  
}
    
  


