import { Injectable } from '@angular/core';

import { SignUpComponent} from './navbar/sign-up/sign-up.component'
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  SignUp(d):any
  {
    alert(JSON.stringify(d));
    return this.http.post('http://localhost:3000/sign-up',d);

  }

  // mene kiya
  login(d):any
  {
    alert("in dataservice of login");
    // alert(JSON.stringify(d));
    return this.http.post('http://localhost:3000/login',d);

  }//mene
}
