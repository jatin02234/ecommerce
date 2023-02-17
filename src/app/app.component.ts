import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { AppserviesService } from './appservies.service';
import { authService } from './auth.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  datas = null;
  btn = true;
  currentRouter = '';
  cardcount: any;
  productData: any;

  constructor(
    private router: Router,
    private service: AppserviesService,
  ) {
    this.currentRouter = "Demo";
    
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRouter = event.url;
        console.log(this.currentRouter);
      }
    });
    this.service.cartqty.subscribe(
      res => {
        this.cardcount = res;
      }
    )
    // console.log(this.cardcount);
  }
  ngOnInit(): void {
    setInterval(() => {
      if (this.currentRouter == '/Login' || this.currentRouter == '/Signup' || this.currentRouter == '/') {
        this.btn = true;
      } else {
        this.btn = false;
      }
    }, 100);

    this.cardcount = JSON.parse(localStorage.getItem('count') as any)
    // console.log(this.cardcount)

    // setInterval(() => {
    //   this.data = localStorage.removeItem('productItem');
    //   this.data = localStorage.removeItem('Login');
    //   this.data = localStorage.removeItem('count');
    //   this.router.navigate(['/']);
    // },300000)
  }
  title = 'signup-task';

  logout() {
    this.data = localStorage.removeItem('productItem');
    this.data = localStorage.removeItem('Login');
    this.data = localStorage.removeItem('count');
    this.router.navigate(['/']);
    // this.service.cartqty.next(this.datas);
  }
  user() {
    this.productData = JSON.parse(localStorage.getItem('productdata') as any)
  }
}
