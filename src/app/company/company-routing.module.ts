import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { GuardGuard } from '../guard/guard.guard';
import { HrComponent } from './hr/hr.component';



const routes: Routes = [
    {
        path: 'info', component: EmployeeComponent, canActivate: [GuardGuard]
    },
    {
        path: 'detail', component: EmployeeDetailComponent, canActivate: [GuardGuard]
    },
    {
        path: 'hr', component: HrComponent, canActivate: [GuardGuard]
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

