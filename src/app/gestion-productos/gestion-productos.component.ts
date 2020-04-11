import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../productos.service";
import { Producto } from "../clases/Producto";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

  productos: Producto[];
  productoFormulario:any;

  constructor(private productService: ProductosService, private formBuilder: FormBuilder) { 

    this.productoFormulario = this.formBuilder.group({
      nombre: [""],
      precio_unitario: [""],
      categoria: [""],
      stock: [""]
    });
    //productService.insertarProducto("Coca-cola", 3.5, "bebidas", 4);
  }

  ngOnInit(): void {
    
    this.productService.obtenerProductos().subscribe(x => {
      this.productos = x as Producto[];

    });

  }

  insertarProducto() {
    console.log(this.productoFormulario.value);
  }

}
