import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _listaProductos:Product[]=[];
  listaProductos: BehaviorSubject<Product[]> = new BehaviorSubject(this._listaProductos);
                                                                      //([])

  constructor() { }

  agregarAlcarrito(producto: Product) {
    let prod = this._listaProductos.find((v1)=>v1.articulo == producto.articulo);
    if(!prod){
      this._listaProductos.push({... producto});
    }else{
      prod.cantidad+=producto.cantidad;
    }
    this.listaProductos.next(this._listaProductos);
  } 

}
