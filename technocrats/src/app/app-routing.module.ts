import { NgModule } from '@angular/core';

import { LoginComponent } from './navbar/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent} from './navbar/home/home.component';

import { SignUpComponent} from './navbar/sign-up/sign-up.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';




// const routes: Routes = [
//   {
//     path:"navbar",component:NavbarComponent,children:[
//       {
//         path:"login",component:LoginComponent

//       }
      
//     ]
  
//   }
// ];


const appRoutes:Routes=[
  {path:'',component:HomeComponent},

  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent},

  {path:'**',component:PageNotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
