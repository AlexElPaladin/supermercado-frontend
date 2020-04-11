import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../productos.service";

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

  constructor(private productService: ProductosService) { 

    productService.obtenerProductos();
  }

  ngOnInit(): void {
  }

}
