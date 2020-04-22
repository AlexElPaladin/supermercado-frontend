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
  precioCompraTotal: number = 0;
  fechaCompra: Date;
  metodoDePago: string = "Pago en efectivo";
  mensaje: string = "";

  constructor(private productService: ProductosService) {
    this.obtenerProductos();
    this.fechaCompra = new Date();
  }

  ngOnInit(): void {
  }

  obtenerProductos() {
    this.productService.obtenerProductos().subscribe(x => {
      this.productos = x as Producto[];

    });
  }

  agregarProductoAlTicket(codigo, unidades) {
    console.log("Antes del for");
    this.productos.forEach(element => {
      if (element["_id"] === codigo) {
        element["unidades"] = unidades;
        this.ticket.push(element);
        this.precioCompraTotal += unidades * element["precio_unitario"];
      }
    });

    console.log(this.ticket);
  }

  finalizarCompra(codigoCliente: string) {
    console.log("Código " + codigoCliente);
    this.productService.carrito = this.ticket;
    this.comprobarMetodoPago(codigoCliente);
    this.productService.finalizarCompra(codigoCliente, this.metodoDePago, this.precioCompraTotal);
    this.mensaje = "Compra realizada con éxito";
  }

  comprobarMetodoPago(codigoCliente: string) {
    if(codigoCliente === "") {
      this.metodoDePago = "Pago en efectivo";
    }else {
      this.metodoDePago = "Pago con tarjeta";
      
    }
  }

  
}
