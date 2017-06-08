import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../Home/home.component';
import { AddEmployeeComponent } from '../Employee/add-employee.component';
import { ListEmployeesComponent } from '../Employee/list-employees.component';
import { AddProductComponent } from '../Product/add-product.component';
import { ListProductsComponent } from '../Product/list-products.component';

const routes: Routes = [
    { path: '', redirectTo: 'AngularApp', pathMatch: 'full' },
    { path: 'AngularApp', component: HomeComponent },
    { path: 'AngularApp/Employee/AddEmployee', component: AddEmployeeComponent },
    { path: 'AngularApp/Employee/ListEmployees', component: ListEmployeesComponent },
    { path: 'AngularApp/Product/AddProduct', component: AddProductComponent },
    { path: 'AngularApp/Product/ListProducts', component: ListProductsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);