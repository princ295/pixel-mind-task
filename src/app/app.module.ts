import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { CompanyModule } from './company/company.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // CompanyRoutingModule,
    // //compeny costom module
    CompanyModule, AuthModule
   
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
