import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
    selector: 'add-employee',
    templateUrl: 'AngularApp/Angular/Employee/add-employee.component.html',
})
export class AddEmployeeComponent implements OnInit {

    message: string;
    employee: Employee = new Employee();

    ngOnInit(): void {
        this.message = 'Enter Employee Details and Save';
    }

    addEmployee(employee: Employee) {
        console.log(employee);
    }
}