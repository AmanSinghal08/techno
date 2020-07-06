import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

    logout()
    {
      localStorage.removeItem('mobile');
      console.clear;
      this.router.navigate(['/']);
    }
}
