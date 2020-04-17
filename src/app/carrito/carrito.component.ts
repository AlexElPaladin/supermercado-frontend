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

  agregarCantidad(evento, input, precio: number) {
    console.log(evento);
    console.log(input);
    console.log("Precio " + precio);
    this.importeTotal += precio;
  }

  continuar() {

    let inputs = document.getElementsByClassName("input-cantidades");

    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      console.log(element.textContent);
      
    }

    //this.route.navigate(["iniciar-sesion"]);
  }

}
