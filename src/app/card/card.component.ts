import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviesService } from '../appservies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  disable:boolean=false;
  qtycount: any;
  myData: any;
  totalqty: any;
  productData: any;
  qtys: any = null;
  constructor(private route: Router, private service: AppserviesService) { }

  ngOnInit(): void {
    this.productData = JSON.parse(localStorage.getItem('productItem') as any)
  }

  placeodr() {
    if (this.productData == null) {
      alert("you don't have any items selected!!!");
      this.route.navigate(['/Home']);
    }
    else {
      localStorage.removeItem('productItem');
      localStorage.removeItem('count');
      alert('Do you want to Orderd ?');
      this.route.navigate(['/Home']);
      this.service.cartqty.next(this.qtys);
    }
  }

  get total() {
    return this.productData.reduce(
      (sum: any, x: any) => ({
        price: sum.price + x.quantity * x.price
      }),
      { quantityTotal: 1, price: 0 }
    ).price;
  }

  get qty() {
    return this.productData.reduce(
      (sum: any, x: any) => ({
        quantity: sum.quantity + x.quantity
      }),
      { qtyTotal: 1, quantity: 0 }
    ).quantity;

  }
  increaseItemCount(index: any) {
    this.productData[index].quantity = this.productData[index].quantity + 1;
    
  }

  decrease(i: any) {
    if (this.productData[i].quantity > 1) {
      this.productData[i].quantity = this.productData[i].quantity - 1;
      this.disable = false;
    }
    else {
      this.disable = true;
      // let confirms: any = confirm('can you remove this items');

      // if (confirms == true) {
      //   const currentArray = JSON.parse(localStorage.getItem('productItem') as any);
      //   let cardcount = JSON.parse(localStorage.getItem('count') as any);
      //   let id = this.productData[i].id;

      //   for (i = 0; i < currentArray.length; ++i) {
      //     if (currentArray[i].id === id) {
      //       currentArray.splice(i, 1);
      //       cardcount = cardcount - 1;
      //       if (cardcount <= 0) { cardcount = null }
      //       this.service.cartqty.next(cardcount);
      //       this.productData = this.productData.slice(1);
      //       localStorage.setItem('productItem', JSON.stringify(currentArray));
      //       localStorage.setItem('count', JSON.stringify(cardcount));
      //       this.router.navigate(['/Card']);
          // }
        // }
      // }
    }
  }

  remove(i:any) {
  
    let confirms: any = confirm('can you remove this items');

    if (confirms == true) {
      const currentArray = JSON.parse(localStorage.getItem('productItem') as any);
      let cardcount = JSON.parse(localStorage.getItem('count') as any);
      let id = this.productData[i].id;

      for (i = 0; i < currentArray.length; ++i) {
        if (currentArray[i].id === id) {
          currentArray.splice(i, 1);
          cardcount = cardcount - 1;
          if (cardcount <= 0) { cardcount = null }
          this.service.cartqty.next(cardcount);
          this.productData = this.productData.slice(1);
          localStorage.setItem('productItem', JSON.stringify(currentArray));
          localStorage.setItem('count', JSON.stringify(cardcount));
          this.route.navigate(['/Card.'],);
          this.productData = JSON.parse(localStorage.getItem('productItem')as any)
        }
      }
    }
  }

}
