import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  nameProp;
  emailProp;

  mobileProp;
  passProp;

  

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  signUp()
  {
    this.ds.SignUp({name:this.nameProp, email:this.emailProp,password:this.passProp,mobile:this.mobileProp}).subscribe((response)=>{
      alert(JSON.stringify(response));
      if(response.status=="ok"){
        alert("registration successfully..........");
        this.router.navigate(['/login']);
      }
      else{
        alert("unsuccessfull.....please try again!!!")
      }
    })
  }

}
