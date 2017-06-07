import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from '../Common/mock-data';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employees',
    template: `
<h3>List of Employees</h3>
<table class="table table-striped">
<tr>
  <td class="success">Employee Id</td>
  <td class="success">First Name</td>
  <td class="success">Last Name</td>
  <td class="success">City</td>
  <td class="success">Country</td>
</tr>
<tr *ngFor="let employee of employees">
  <td>{{employee.EmployeeId}}</td>
  <td>{{employee.FirstName}}</td>
  <td>{{employee.LastName}}</td>
  <td>{{employee.City}}</td>
  <td>{{employee.Country}}</td>
</tr>
</table>
`,
    providers: [EmployeeService]
})
export class ListEmployeesComponent implements OnInit {

    errorMsg: string;
    employees: Employee[];
    //employees: Employee[] = EMPLOYEES;

    constructor(private employeeService: EmployeeService) { }

    ngOnInit(): void {
        this.getEmployees();
    }

    getEmployees() {

        this.employeeService.getEmployees()
            .subscribe(
            employees => this.employees = employees,
            error => this.errorMsg = <any>error);
    }

}