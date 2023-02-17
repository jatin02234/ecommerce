import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppserviesService } from '../appservies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: any = []
  count = 0;
  productData: any = [];
  isAdmin = false;

  constructor(private services: AppserviesService,private routers:ActivatedRoute) {
    this.productData = JSON.parse(localStorage.getItem('productItem') as any);
    let signup = JSON.parse(localStorage.getItem('Signup') as any);

  //   const user = signup.find((a: any) => {
  //     let login = JSON.parse(localStorage.getItem('Login') as any);
  //     return a.email === login.email && a.password === login.password
  //   })
  //   if (user.role == "Admin") {
  //     this.btn = true;
  //   } else {
  //     this.btn = false;
  //   }
  //   this.product = JSON.parse(localStorage.getItem('Admin') as any);
    this.routers.params.subscribe((parems:any)=>{
      if(parems['id'] == "Admin"){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
    })

  }


  ngOnInit(): void {
    this.product = this.services.product;

  }
  addToCart(products: any) {
    if (this.productData) {
      this.count = JSON.parse(localStorage.getItem('count') as any);
      let data = this.productData.findIndex((data: any) =>
        data.id == products.id && data.name == products.name)

      if (data != -1) {
        (this.productData[data].quantity = this.productData[data].quantity + 1)
      } else {
        this.productData.push(products);
        this.count += 1;
        this.services.cartqty.next(this.count);
        localStorage.setItem('count', JSON.stringify(this.count));
      }
      localStorage.setItem('productItem', JSON.stringify(this.productData));

    } else {
      this.productData = []
      this.productData.push(products);
      localStorage.setItem('productItem', JSON.stringify(this.productData));
      this.count += 1;
      this.services.cartqty.next(this.count);
      localStorage.setItem('count', JSON.stringify(this.count));
    }

  }
  delete(index: any) {
    // let confirms: any = confirm('can you remove this items');
    // if (confirms == true) {
    this.product.splice(index, 1);
    // }
    localStorage.setItem('Admin', JSON.stringify(this.product))
  }
}
