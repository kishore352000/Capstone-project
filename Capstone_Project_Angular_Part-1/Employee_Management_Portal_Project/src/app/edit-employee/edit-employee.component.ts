import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    id:'',
    name:'',
    role:'',
    email:'',
    phone:''

  };
  alert:boolean=false;
  alert1:boolean=false;

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');

        if(id){
          this.employeeService.getEmployee(id)
          .subscribe({
            next: (response) => {
              this.employeeDetails = response;

            }
          })

        }
      }
    })
  }
  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
    .subscribe({
      next: (response) => {
        this.alert=true;
        
      }
    });
  }
  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next: (response) => {
        this.alert1=true;
      }
    });
  }

}
