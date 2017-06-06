"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var ListEmployeesComponent = (function () {
    //employees: Employee[] = EMPLOYEES;
    function ListEmployeesComponent(employeeService) {
        this.employeeService = employeeService;
    }
    ListEmployeesComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    ListEmployeesComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (employees) { return _this.employees = employees; }, function (error) { return _this.errorMsg = error; });
    };
    return ListEmployeesComponent;
}());
ListEmployeesComponent = __decorate([
    core_1.Component({
        selector: 'list-employees',
        template: "\n<h3>List of Employees</h3>\n<table class=\"table table-striped\">\n<tr>\n  <td class=\"success\">Employee Id</td>\n  <td class=\"success\">First Name</td>\n  <td class=\"success\">Last Name</td>\n  <td class=\"success\">City</td>\n  <td class=\"success\">Country</td>\n</tr>\n<tr *ngFor=\"let employee of employees\">\n  <td>{{employee.EmployeeId}}</td>\n  <td>{{employee.FirstName}}</td>\n  <td>{{employee.LastName}}</td>\n  <td>{{employee.City}}</td>\n  <td>{{employee.Country}}</td>\n</tr>\n</table>\n",
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], ListEmployeesComponent);
exports.ListEmployeesComponent = ListEmployeesComponent;
//# sourceMappingURL=list-employees.component.js.map