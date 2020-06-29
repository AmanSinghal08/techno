import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { Routes, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { GamesComponent } from './navbar/games/games.component';
import { AboutComponent } from './navbar/about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './navbar/login/login.component';
import { SignUpComponent } from './navbar/sign-up/sign-up.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';

const appRoutes:Routes=[
   {path:'',component:HomeComponent},
   {path:'games',component:GamesComponent},
   {path:'about',component:AboutComponent},
   {path:'login',component:LoginComponent},
   {path:'sign-up',component:SignUpComponent},
  
   {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GamesComponent,
    AboutComponent,
   
    PageNotFoundComponent,
   
    LoginComponent,
   
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

