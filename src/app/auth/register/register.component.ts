import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,private service: AuthService,  private route: Router){}

  register: FormGroup;
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
    // First Name,Last Name,Email,Password 
    this.register= this.formbuilder.group({
      // Username, email, password 
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  get f() { return this.register.controls; }


  onSubmit() {
    console.log(this.register.value)
    this.submit = true;
    if (this.register.invalid) {
        return;
    }
    this.service.register(this.register.value).subscribe(res=>{
      alert('your register sucessfuy')
      this.route.navigateByUrl('/A/login')
    },this.errCallBack)
  }

}
