import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../productos.service";
import { Producto } from "../clases/Producto";

@Component({
  selector: 'app-compra-online',
  templateUrl: './compra-online.component.html',
  styleUrls: ['./compra-online.component.css']
})
export class CompraOnlineComponent implements OnInit {
  productos: Producto[];
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {

    this.productosService.obtenerProductos().subscribe((x) => {
      this.productos = x as Producto[];
    });
  }

}
