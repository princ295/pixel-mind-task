import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(private formbuilder: FormBuilder,private service: AuthService, private route: Router){}

  login: FormGroup;
  submit:boolean= false;


  public errCallBack= (errRes: HttpErrorResponse)=>{
    if(errRes.error instanceof Error){
      alert('Error! Client Side Error getting');
    }
    else{
      alert('Error! Client Side Error getting');
    }
  }

  ngOnInit(): void {
    this.login= this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }
  get f() { return this.login.controls; }


  onSubmit(){
    console.log()
    this.submit = true;
    if (this.login.invalid) {
        return;
    }
    this.service.login(this.login.value).subscribe(res=>{
      alert('your login sucessfully')
      this.route.navigate(['/E/info'])
    },this.errCallBack)
  }
}
