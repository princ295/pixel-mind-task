import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CompanyService } from './company.service';


import { FormsModule } from "@angular/forms";
import { CompanyRoutingModule } from './company-routing.module';

import { HttpClientModule } from "@angular/common/http";
import { HrComponent } from './hr/hr.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [EmployeeComponent, EmployeeDetailComponent, HrComponent],
  imports: [
    CompanyRoutingModule, HttpClientModule, 
    CommonModule, FormsModule, ChartsModule
  ],
  exports: [
    EmployeeComponent, EmployeeDetailComponent, CompanyRoutingModule
  ],
  providers: [
    CompanyService
  ]
})
export class CompanyModule { }
