import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products-list/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  listaProductos$: Observable<Product[]>;

  constructor(private cart: ProductCartService) {
    this.listaProductos$= cart.listaProductos.asObservable();
  }

  ngOnInit(): void {
  }
  
}
