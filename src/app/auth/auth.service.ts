import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { User } from 'src/model/info';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  readonly root_api: string ="http://localhost:3000/Employee";
  
  readonly user_api: string ="http://localhost:3000/User";
  

  private setSession(authResult) {
    console.log('api call have done')
    const token = authResult.token;
    localStorage.setItem('token', authResult.token);
  }

  register(obj: any){
    return this.http.post(this.user_api,obj).pipe(tap(
      response => {
        console.log(response)
        this.setSession(response)}),
    shareReplay(),)
  }

  // http://localhost:3000/User?email=dewanganprince02@gmail.com&password=123456
  login(obj: any) {
    console.log(obj)
    console.log(`${this.user_api}?email=${obj.email}&password=${obj.password}`)
    return this.http.get(`${this.user_api}?email=${obj.email}&password=${obj.password}`).pipe(
      tap((response: User) => {
        let info: User = response as User
        info.token = `xyz@${response[0].fname}pqwxy&${response[0].lname}`
        
        console.log(response)
        const enc = btoa(escape(JSON.stringify(response)));
        this.setSession(response)
        // encryption
        localStorage.setItem('Encrytion_Token', enc)
      }),
      shareReplay(),
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    this.route.navigate(['/A/login'])
  }
}
