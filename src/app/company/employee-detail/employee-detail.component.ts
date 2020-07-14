import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Model } from 'src/model/model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private company: CompanyService, private auth: AuthService) { }
  _: any[] = []
  ngOnInit(): void {
    this._ = this.company.info
  }


  public errCallBack= (errRes: HttpErrorResponse)=>{
    if(errRes.error instanceof Error){
      alert('Error! Client Side Error getting');
    }
    else{
        alert('Error! Client Side Error getting');
    }
  }

  savedrecord(info){
    this.company.postReq(info).subscribe(res=>{
      if(res){
        alert("your record sucessfully saved")
      }
    },this.errCallBack)
  }
  logout(){
    this.auth.logout()
  }
}
