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
  mobileProp:string;
  passProp:string;

  ngOnInit(): void {
  
    if(localStorage.getItem('mobile')){
      this.router.navigate(['/dashboard']);
    }
  }

  loginPlay(){
   
   if(this.mobileProp.length==10 && this.passProp.length>0){
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
    })}
    else{
      alert("please fill input field with correct value");
    }
  }}