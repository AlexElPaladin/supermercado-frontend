import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../productos.service";
import { Producto } from "../clases/Producto";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-compra-online',
  templateUrl: './compra-online.component.html',
  styleUrls: ['./compra-online.component.css']
})
export class CompraOnlineComponent implements OnInit {
  productos: Producto[];
  cantidadCompraCarrito: number;
  carrito: Producto[] = [];
  
  constructor(private productosService: ProductosService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.cantidadCompraCarrito = 0;
    this.productosService.obtenerProductos().subscribe((x) => {
      this.productos = x as Producto[];
    });
  }

  anadirCarrito(id: string, boton) {
    console.log(boton);
    boton.innerHTML = "Añadido";
    this.agregarProductoAlCarritoPorId(id);
    this.cantidadCompraCarrito++;
    console.log(this.cantidadCompraCarrito);
    console.log(this.carrito);
  }

  agregarProductoAlCarritoPorId(codigo: string) {
    this.productos.forEach(element => {
      if (element["_id"] === codigo) {
        this.carrito.push(element);
      }
    });
  }

  quitarProductoDelCarrito(codigo: string) {
    let indice = 0;
    this.productos.forEach(element => {
      if (element["_id"] === codigo) {
        this.carrito.splice(indice, 1);
      }
      indice++;
    });
  }

  irCarrito() {
    this.productosService.carrito = this.carrito;
    this.router.navigate(["carrito"]);
  }


}
