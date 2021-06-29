import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from './product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
 
  productos: Product[] = [
    {
    capacidad: 4 , 
    material:"Poliester", 
    imperm:3000, 
    articulo: "Carpa 4",
    image: "assets/distribuciontandil/Carpas/carpa 4 o 6 personas.jpg",
    stock:5,
    clearance:false,
    precio:4500,
    cantidad:0,
  },
  {
    capacidad: 2 , 
    material:"Poliester", 
    imperm:2000, 
    articulo: "Carpa 2",
    image: "assets/distribuciontandil/Carpas/Carpa 2 personas.jpg",
    stock:8,
    clearance:true,
    precio:3500,
    cantidad:0,
  },
  {
    capacidad: 6 , 
    material:"Poliester", 
    imperm:7000, 
    image: "assets/distribuciontandil/Carpas/Carpa 6 personas Escape.jpg",
    articulo: "Carpa 6",
    stock:0,
    clearance:false,
    precio:6000,
    cantidad:0,
  },
  {
    capacidad: 1, 
    material:"polietileno", 
    articulo:"Colchon 1p",
    imperm:1000, 
    image:"assets/distribuciontandil/Colchones/1 plaza caja 2.jpg", //es una url
    stock:6,
    clearance:false,
    precio:1800,
    cantidad:0,
  },
  {
    capacidad: 2, 
    material:"polietileno", 
    articulo:"Colchon 2p",
    imperm:2000, 
    image:"assets/distribuciontandil/Colchones/Colchon inflable 2 plazas pavillo 2.jpg", //es una url
    stock:15,
    clearance:true,
    precio:2500,
    cantidad:0,
  },
  {
    capacidad: 4, 
    material:"polietileno", 
    articulo:"Refugio",
    imperm:2000, 
    image:"assets/distribuciontandil/Refugios de playa/refugio de playa.jpg", //es una url
    stock:15,
    clearance:false,
    precio:3000,
    cantidad:7,
  },
  {
    capacidad: 3, 
    material:"polietileno", 
    articulo:"Gazebo",
    imperm:2000, 
    image:"assets/distribuciontandil/gazebo2.jpg", //es una url
    stock:15,
    clearance:false,
    precio:3000,
    cantidad:7,
  },
  {
    capacidad: 5, 
    material:"PVC", 
    articulo:"Pileta 5p",
    imperm:3000, 
    image:"assets/distribuciontandil/3,66 x 76 cm.jpg", //es una url
    stock:23,
    clearance:true,
    precio:7700,
    cantidad:7,
  },
  ];
 
  
  constructor(private cart:ProductCartService) { 
  }

  ngOnInit(): void {
  }

  agregarAlcarrito(producto:Product):void{
    this.cart.agregarAlcarrito(producto);
    producto.stock-=producto.cantidad;
    producto.cantidad=0;
  }

  maxReached(m:string){
    alert(m);
  }

}
