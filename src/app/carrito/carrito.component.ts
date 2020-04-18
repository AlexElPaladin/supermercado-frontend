import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../clases/Producto';
import { ProductosService } from '../productos.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: Producto[];
  unidades: any[];
  importeTotal: number = 0;
  productosCantidadFormulario: any;

  constructor(private route: Router, private productoServicio: ProductosService ) { 

    this.carrito = this.productoServicio.carrito;
    
  }

  ngOnInit(): void {
  }



  continuar() {

    let inputs = document.getElementsByClassName("input-cantidades"),
    names  = [].map.call(inputs, function( input ) {
        return input.value;
    });

    for (let i = 0; i < names.length; i++) {
      const unidades = names[i];
      this.carrito[i].unidades = unidades;
      this.importeTotal += unidades * this.carrito[i].precio_unitario; 
      
    }

    this.productoServicio.precioTotal = this.importeTotal;

    this.productoServicio.carrito = this.carrito;

    this.route.navigate(["iniciar-sesion"]);
  }

}
