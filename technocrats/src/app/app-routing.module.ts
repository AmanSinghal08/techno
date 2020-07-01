import { NgModule } from '@angular/core';

import { LoginComponent } from './navbar/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent} from './navbar/home/home.component';
import { GamesComponent} from './navbar/games/games.component';
import { SignUpComponent} from './navbar/sign-up/sign-up.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';



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
  {path:'games',component:GamesComponent},
  
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
 
  {path:'**',component:PageNotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
