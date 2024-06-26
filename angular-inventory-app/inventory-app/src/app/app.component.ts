import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from './product.model';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  product: Product[];


  constructor() {
    this.product = [

      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),


      new Product(
        "NICEHAT",
        "A Nice Black Hat",
        "/assets/images/products/black-hat.jpg",
        ["Men", "Accessories", "Hats"],
        29.99
      )
    ]


  }
  productWasSelected(product:Product):void{
    console.log('Product Clicked : ', product);
  }
}