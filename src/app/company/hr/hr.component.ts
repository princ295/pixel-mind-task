import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CompanyService } from '../company.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HrComponent implements OnInit {

  constructor(private reandred: Renderer2, private src: CompanyService, private auth: AuthService) { }

  @ViewChild('tech') tech: ElementRef<HTMLElement>;

  _: any[] = [{id: 1, name: "Developement"}, {id: 2, name: "Testing"}, {id: 3, name: "System Admin"},
    {id: 4, name: "Finance"}
  ];

  data: any[]= []
  label: any[] =  ["Developement", "Testing", "System Admin", "Finance"]
  type: string = 'doughnut';

  val:string ='';
 
  obj: any[];

  // "Angular","React","Python"
  techobj = {
    Angular: 0, React: 0, Python: 0, Node:0, Dene: 0, Vuejs:0
  }

  ngOnInit(): void {

    this.obj =  this.src.info
    for(let i=0;i<this.label.length; i++){
      let info = this.obj.filter((element)=>{
        console.log(element.department, this.label[i])
        return element.department == this.label[i]})
      console.log(info)

      this.data.push(info.length as any)
      console.log('=================')
      console.log(this.data)
    }
  }
  onChange(info){
    if(info.target.value == "Finance"){
      this.reandred.setStyle(this.tech.nativeElement, 'display','block')
    }else{
      this.reandred.setStyle(this.tech.nativeElement, 'display','none')

      this.data = []
      this.label = []
      this.label =  ["Developement", "Testing", "System Admin", "Finance"]
      this.obj =  this.src.info
      for(let i=0;i<this.label.length; i++){
        let info = this.obj.filter((element)=>{
          console.log(element.department, this.label[i])
          return element.department == this.label[i]})
        console.log(info)
  
        this.data.push(info.length as any)
        console.log('=================')
        console.log(this.data)
      }
  

      //insert default value
    }
  }

  getinfo(info: string){
    this.type = info
  }

  on_Change(info: any){
    console.log(info)
    if(info.target.checked){
      let _:any[] = []
      let data: any[] = []

      _.push(info.target.value)
      this.obj.map((element)=>{
        if(element.technology.includes(info.target.value)){

          console.log('++++++++++')
          console.log(info.target.value)
          console.log('++++++++++')



          switch(info.target.value){
            case "Angular":
               var r =  this.techobj.Angular
               r = r + 1
               this.techobj.Angular = r
               console.log(r, this.techobj.Angular)
              break

            case "React":

              var r =  this.techobj.React
              r = r + 1
              this.techobj.React = r
              break

            case "Python":
              var r =  this.techobj.Python
              r = r + 1
              this.techobj.Python = r
              break


            case "Vuejs":
              var r =  this.techobj.Vuejs
              r = r + 1
              this.techobj.Vuejs = r
              break

            case "Nodejs":
              var r =  this.techobj.Node
              r = r + 1
              this.techobj.Node = r
              break
            case "Deno":
              var r =  this.techobj.Dene
              r = r + 1
              this.techobj.Dene = r
              break

          }
          console.log(this.techobj)
        }
      })

      this.label = ["Angular","React", "Python", "Vuejs", "Nodejs", "Deno"]
      // Angular: 16, React: 0, Python: 0, Node: 0, Dene: 0, …}
      this.data = [this.techobj.Angular, this.techobj.React, this.techobj.Python, this.techobj.Vuejs, this.techobj.Node, this.techobj.Dene]

    }
    else{
      this.obj.map((element)=>{
        if(element.technology.includes(info.target.value)){
          
          switch(info.target.value){
            case "Angular":
               var r =  this.techobj.Angular
               r = r - 1
               this.techobj.Angular = r
               console.log(r, this.techobj.Angular)
              break

            case "React":

              var r =  this.techobj.React
              r = r - 1
              this.techobj.React = r
              break

            case "Python":
              var r =  this.techobj.Python
              r = r - 1
              this.techobj.Python = r
              break


            case "Vuejs":
              var r =  this.techobj.Vuejs
              r = r - 1
              this.techobj.Vuejs = r
              break

            case "Nodejs":
              var r =  this.techobj.Node
              r = r - 1
              this.techobj.Node = r
              break
            case "Deno":
              var r =  this.techobj.Dene
              r = r - 1
              this.techobj.Dene = r
              break

          }
        }
      })
      this.label = ["Angular","React", "Python", "Vuejs", "Nodejs", "Deno"]
      // Angular: 16, React: 0, Python: 0, Node: 0, Dene: 0, …}
      this.data = [this.techobj.Angular, this.techobj.React, this.techobj.Python, this.techobj.Vuejs, this.techobj.Node, this.techobj.Dene]
      console.log(this.techobj)
    }
  }

  logout(){
    this.auth.logout()
  }


  get(){
    return{
      info: [
        {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Developement",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Testing",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Testing",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Developement",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Developement",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Finance",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Finance",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "System Admin",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "System Admin",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Developement",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Developement",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python","Nodejs"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Developement",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python","Deno"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Developement",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Developement",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "Developement",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }, {
          "id": 1,
          "name": "prince dewangan",
          "email": "dewanganprince02@gmail.com",
          "department": "System Admin",
          "gender": "Male",
          "phone": "987456123",
          "age": 21,
          "address": "raipur chhattisgrh",
          "technology": ["Angular","React","Python"]
        }
      ]
    }
  }



}


