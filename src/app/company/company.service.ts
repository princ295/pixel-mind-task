import { Injectable, OnInit } from '@angular/core';
import { Model } from 'src/model/model';

import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService implements OnInit {

  constructor(private http: HttpClient) { }

  readonly url:string = "http://localhost:3000/Employee";
  info: Model[] = []

  data: any[]= []
  label: any[] =  ["Developement", "Testing", "System Admin", "Finance"]
  type: string = 'doughnut';


  ngOnInit(){
    let _:any[] = this.get().info

    console.log(_)
    for(let i=0;i<this.label.length; i++){
      let info = _.filter((element)=>{
        console.log(element.department, this.label[i])
        return element.department == this.label[i]})
      console.log(info)

      this.data.push(info.length as any)
      console.log('=================')
      console.log(this.data)
    }
  }

  postReq(info){
    return this.http.post(this.url,info)
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
