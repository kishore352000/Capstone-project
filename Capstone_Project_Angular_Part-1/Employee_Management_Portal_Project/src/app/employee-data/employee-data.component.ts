import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from '../models/employee.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  employees: Employee[] =[];

  constructor(private employeesService: EmployeesService, private httpClientModule: HttpClientModule) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees = employees ;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
