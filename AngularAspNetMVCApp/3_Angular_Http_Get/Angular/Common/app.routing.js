"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("../Home/home.component");
var add_employee_component_1 = require("../Employee/add-employee.component");
var list_employees_component_1 = require("../Employee/list-employees.component");
var add_product_component_1 = require("../Product/add-product.component");
var list_products_component_1 = require("../Product/list-products.component");
var routes = [
    { path: '', redirectTo: 'AngularApp', pathMatch: 'full' },
    { path: 'AngularApp', component: home_component_1.HomeComponent },
    { path: 'AngularApp/Employee/AddEmployee', component: add_employee_component_1.AddEmployeeComponent },
    { path: 'AngularApp/Employee/ListEmployees', component: list_employees_component_1.ListEmployeesComponent },
    { path: 'AngularApp/Product/AddProduct', component: add_product_component_1.AddProductComponent },
    { path: 'AngularApp/Product/ListProducts', component: list_products_component_1.ListProductsComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map