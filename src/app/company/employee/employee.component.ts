import { Component, OnInit } from '@angular/core';
import { Model } from 'src/model/model';
import { CompanyService } from '../company.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private compenysrc: CompanyService, private auth: AuthService) { }

  list: any = []

  ngOnInit(): void {
    this.newform()

    this.list = Array(45).fill(0).map((e,i)=>i+1)
  }

  val: string = '';
  _: any[] = [{id: 1, name: "Developement"}, {id: 1, name: "Testing"}, {id: 1, name: "System Admin"},
    {id: 1, name: "Finance"}
  ];

  //for binding employee data
  obj: Model;

  newform(){
    this.obj={
      name: '',
      email: '',
      department: '',
      gender: '',
  
      phone: '',
      age: 0,
      address: '',
      technology: []   
    }
  }

  onChange(event){
    if(event.target.checked){
     this.obj.technology.push(event.target.value as never)
    }else{
      if(this.obj.technology.includes(event.target.value as never)){
        let index = this.obj.technology.indexOf(event.target.value as never)
        this.obj.technology = this.removedata(index) as []
        console.log("remove element from arry..........", index, this.obj.technology.slice(index,1))
        console.log(this.obj.technology)
      };
    }
    console.log(this.obj.technology)
  }


  removedata(index: number) {
   let du_array= [...this.obj.technology]
   console.log(du_array.length)
   du_array.splice(index, 1)
   return du_array
  }

  onSubmit(){
    console.log(this.obj)
    this.compenysrc.info.push(this.obj)
    this.newform()
    this.obj.technology = []
    alert('Employee Record Saved Sucessfully ')
  }

  logout(){
    this.auth.logout()
  }
}
