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
  productoSelected: Producto;
  productoFormulario:any;
  accionRealizando: string;

  constructor(private productService: ProductosService, private formBuilder: FormBuilder) { 

    this.productoFormulario = this.formBuilder.group({
      nombre: [""],
      precio_unitario: [""],
      categoria: [""],
      stock: [""]
    });

    this.accionRealizando = "Insertar";
    //productService.insertarProducto("Coca-cola", 3.5, "bebidas", 4);
  }

  ngOnInit(): void {
    
    this.obtenerProductos();

  }

  obtenerProductos() {
    this.productService.obtenerProductos().subscribe(x => {
      this.productos = x as Producto[];

    });
  }

  insertarProducto() {
    this.productoSelected = this.productoFormulario.value;
    console.log(this.productoSelected.nombre);
    this.productService.insertarProducto(this.productoSelected.nombre, this.productoSelected.precio_unitario, this.productoSelected.categoria, this.productoSelected.stock).subscribe(() => {
      this.obtenerProductos();
    });
    
  }

  editarProducto(codigo: string) {
    console.log("Editar - " + codigo);
    this.buscarProductoPorId(codigo);
    this.actualizarValoresFormulario();
    this.accionRealizando = "Editar";
  }

  eliminarProducto(codigo: string) {
    console.log("Eliminar - " + codigo);
    //No se la razón pero al eliminar devuelve un error pero la función de eliminado funciona, así que hago un catch para que me refresque los
    //datos a pesar de que falle
    this.productService.eliminarProducto(codigo).subscribe(
      res => {
        this.obtenerProductos();
      },
      error => {
        this.obtenerProductos();
      },
      () => {
        
      });
  }

  buscarProductoPorId(codigo: string) {
    this.productos.forEach(element => {
      if (element["_id"] === codigo) {
        this.productoSelected = element;
      }
    });
  }

  actualizarValoresFormulario() {
    this.productoFormulario.setValue({nombre: this.productoSelected.nombre, precio_unitario: this.productoSelected.precio_unitario, categoria: this.productoSelected.categoria, stock: this.productoSelected.stock});
  }
}
