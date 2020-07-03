import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ds:DataService,private router:Router) { }
  mobileProp;
  passProp;

  ngOnInit(): void {
  
    if(localStorage.getItem('mobile')){
      this.router.navigate(['/dashboard']);
    }
  }

  loginPlay(){
    alert("in login play fun call"+JSON.stringify({password:this.passProp,mobile:this.mobileProp}));

    this.ds.login({password:this.passProp,mobile:this.mobileProp})
    .subscribe((response)=>{
      
      alert(JSON.stringify(response));
      console.log(JSON.stringify(response))
 
      if(response.status=="ok"){
        
        alert("registration successfully..........");
        localStorage.setItem('mobile',response.data[0].mobile);
     

        this.router.navigate(['/dashboard']);
      }
      else{
        alert("unsuccessfull login.....");
       
      }
    })
  }
  loginHost(){
    alert("login host")
  }
  // login()
  // {
  //   this.ds.SignIn({email:this.emailProp,password:this.passwordProp})
  //   .subscribe((response)=>{
  //     if(response.status=="ok"){
  //       localStorage.setItem('name',response.data[0].name);
  //       localStorage.setItem('email',response.data[0].email);
  //       this.router.navigate(['/dashboard']);
  //     }
  //     else{
  //       alert("credentials incorrect");
  //     }
  //   })
  // }

}
