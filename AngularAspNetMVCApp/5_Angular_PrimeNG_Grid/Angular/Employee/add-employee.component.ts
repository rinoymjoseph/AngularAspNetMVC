import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'add-employee',
    templateUrl: 'AngularApp/Angular/Employee/add-employee.component.html',
    providers: [EmployeeService]
})
export class AddEmployeeComponent implements OnInit {

    message: string;
    employee: Employee = new Employee();

    constructor(private employeeService: EmployeeService) { }

    ngOnInit(): void {
        this.message = 'Enter Employee Details and Save';
    }

    addEmployee(employee: Employee) {
        console.log(employee);
        if (!employee) { return; }
        this.employeeService.saveEmployee(employee)
            .subscribe(
            message => this.message = message,
            error => this.message = <any>error);
    }
}