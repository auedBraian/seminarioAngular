import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad: number | any;
  
  @Input()
  maximo: number | any;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upcantidad():void{
    if(this.cantidad < this.maximo){
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
  }
  else{
    this.maxReached.emit("se alcanzo el maximo");
  }
  }

  downcantidad():void{
    if(this.cantidad>0){
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
  }
  }

  onChangeCantidad(event: any):void{
    console.log("holaws");
    this.cantidadChange.emit(this.cantidad);
  }

}
