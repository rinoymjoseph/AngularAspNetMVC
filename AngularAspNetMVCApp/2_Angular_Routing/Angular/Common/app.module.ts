import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from '../Home/home.component';
import { AddEmployeeComponent } from '../Employee/add-employee.component';
import { ListEmployeesComponent } from '../Employee/list-employees.component';
import { AddProductComponent } from '../Product/add-product.component';
import { ListProductsComponent } from '../Product/list-products.component';
@NgModule({
    imports: [
        BrowserModule,
        routing,],
    declarations: [
        AppComponent,
        HomeComponent,
        AddEmployeeComponent,
        ListEmployeesComponent,
        AddProductComponent,
        ListProductsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }