import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviesService {
  cartqty = new Subject<any>();
  // productData=JSON.parse(localStorage.getItem('productItem') as any);

  constructor() { }

  product = [
    {
      'id': 1,
      'name': 'Nexon',
      'model': 'Nexon ev2',
      'img': "https://tse2.mm.bing.net/th?id=OIP.yVMVhZptbHrgFgiHCoAaPgHaEK&pid=Api&P=0&w=315&h=177",
      'price': 700000,
      'link': 'nexon',
      'quantity': 1
    },
    {
      'id': 2,
      'name': 'Creta',
      'model': 'Creta Hyundai ',
      'img': "https://tse1.mm.bing.net/th?id=OIP.ubi19LkJsWwZ5pGZ-bpanQHaE_&pid=Api&P=0&w=231&h=156",
      'price': 1000000,
      'link': 'creta',
      'quantity': 1
    },
    {
      'id': 3,
      'name': 'Punch',
      'model': 'Punch Pure MT',
      'img': "https://cars.tatamotors.com/images/punch/punch-suv-home.png",
      'price': 582000,
      'link': 'punch',
      'quantity': 1
    },
    {
      'id': 4,
      'name': 'Grand i10',
      'model': 'GRAND i10 NIOS',
      'img': "https://tse2.mm.bing.net/th?id=OIP.wot3oi3HMCW0kpMw0EOAsAHaE8&pid=Api&P=0&w=229&h=153",
      'price': 542000,
      'link': 'i10',
      quantity: 1
    },
    {
      'id': 5,
      'name': 'Harrier ',
      'model': 'Harrier XZ ',
      'img': "https://cars.tatamotors.com/images/dark/home-harrier-thumbnail.jpg",
      'price': 1827000,
      'link': 'harrier',
      'quantity': 1
    },
    {
      'id': 6,
      'name': 'Tigor EV',
      'model': 'Tigor XM',
      'img': "https://www.indiacarnews.com/wp-content/uploads/2022/03/2022-Tata-Tigor-EV-Range.jpg",
      'price': 1270000,
      'link': 'tigor',
      'quantity': 1
    },
    {
      'id': 7,
      'name': 'Hexa',
      'model': 'Hexa XE 4x2',
      'img': "https://tse2.mm.bing.net/th?id=OIP.OuaHnE1Iyhq4gqbkUpvjMAHaFj&pid=Api&P=0&w=204&h=153",
      'price': 1940000,
      'link': 'hexa',
      'quantity': 1
    },
    {
      'id': 8,
      'name': 'Venue',
      'model': 'Hyundai Venue',
      'img': "https://cdn.autoportal.com/img/new-cars-gallery/hyundai/venue/photo34/hyundai-venue-9a6d3a2d.jpg",
      'price': 699000,
      'link': 'venue',
      'quantity': 1
    },
    {
      'id': 9,
      'name': 'Brezza',
      'model': 'Maruti Vitara Brezza',
      'img': "https://www.rushlane.com/wp-content/uploads/2020/02/2020-maruti-brezza-facelift-dealer-bookings-open-2.jpg",
      'price': 710000,
      'link': 'brezza',
      'quantity': 1
    },
  ]

}
