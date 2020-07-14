import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'A',
    loadChildren: () => import('./auth/auth.module').then(e => e.AuthModule)
  },
  {
    path: 'E',
    loadChildren: () => import('./company/company.module').then(e => e.CompanyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
