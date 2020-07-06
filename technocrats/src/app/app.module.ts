import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { Routes, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';

import { HttpClientModule} from '@angular/common/http'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './navbar/login/login.component';
import { SignUpComponent } from './navbar/sign-up/sign-up.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';


const appRoutes:Routes=[
   {path:'',component:HomeComponent},
 
   
   {path:'login',component:LoginComponent},
   {path:'sign-up',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent },
   {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
      LoginComponent,
       SignUpComponent,
       DashboardComponent,
    PageNotFoundComponent,
    GamesComponent
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

