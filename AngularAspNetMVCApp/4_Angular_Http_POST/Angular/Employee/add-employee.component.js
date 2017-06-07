"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_1 = require("./employee");
var AddEmployeeComponent = (function () {
    function AddEmployeeComponent() {
        this.employee = new employee_1.Employee();
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.message = 'Enter Employee Details and Save';
    };
    AddEmployeeComponent.prototype.addEmployee = function (employee) {
        console.log(employee);
    };
    return AddEmployeeComponent;
}());
AddEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'add-employee',
        templateUrl: 'AngularApp/Angular/Employee/add-employee.component.html',
    })
], AddEmployeeComponent);
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=add-employee.component.js.map