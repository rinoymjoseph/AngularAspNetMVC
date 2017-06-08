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
var employee_1 = require("./employee");
var employee_service_1 = require("./employee.service");
var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(employeeService) {
        this.employeeService = employeeService;
        this.employee = new employee_1.Employee();
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.message = 'Enter Employee Details and Save';
    };
    AddEmployeeComponent.prototype.addEmployee = function (employee) {
        var _this = this;
        console.log(employee);
        if (!employee) {
            return;
        }
        this.employeeService.saveEmployee(employee)
            .subscribe(function (message) { return _this.message = message; }, function (error) { return _this.message = error; });
    };
    return AddEmployeeComponent;
}());
AddEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'add-employee',
        templateUrl: 'AngularApp/Angular/Employee/add-employee.component.html',
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], AddEmployeeComponent);
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=add-employee.component.js.map