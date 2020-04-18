import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../productos.service";
import { Producto } from "../clases/Producto";
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productos: Producto[];
  ticket: Producto[] = [];
  unidades: any[] = [];
  precioTotal: number = 0;
  fecha: Date;
  metodoDePago: string = "Pago en efectivo";

  constructor(private productService: ProductosService) {
    this.obtenerProductos();
    this.fecha = new Date();
  }

  ngOnInit(): void {
  }

  obtenerProductos() {
    this.productService.obtenerProductos().subscribe(x => {
      this.productos = x as Producto[];

    });
  }

  registrarProducto(codigo, unidades) {
    console.log("Antes del for");
    this.productos.forEach(element => {
      if (element["_id"] === codigo) {
        element["unidades"] = unidades;
        this.ticket.push(element);
        this.precioTotal += unidades * element["precio_unitario"];
      }
    });

    console.log(this.unidades);
    console.log(this.ticket);
  }

  finalizarCompra(codigoCliente: string) {
    console.log("Código " + codigoCliente);
    this.productService.carrito = this.ticket;
    if(codigoCliente === "") {
      this.productService.finalizarCompra();
    }else {
      this.productService.finalizarCompra(codigoCliente);
    }
    
    
  }

  comprobarMetodoPago(codigoCliente: string) {
    if(codigoCliente === "") {
      this.metodoDePago = "Pago en efectivo";
    }else {
      this.metodoDePago = "Pago con tarjeta";
    }
  }
  
}
