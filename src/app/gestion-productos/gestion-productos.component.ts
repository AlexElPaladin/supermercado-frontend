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
  productoElegido: Producto;
  productoFormulario:any;
  accionRealizando: string;

  constructor(private productService: ProductosService, private formBuilder: FormBuilder) { 

    this.productoFormulario = this.formBuilder.group({
      _id: [""],
      nombre: [""],
      precio_unitario: [""],
      categoria: [""],
      stock: [""],
      imagen: [""]
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
    this.productoElegido = this.productoFormulario.value;
    console.log(this.productoElegido.nombre);
    this.productService.insertarProducto(this.productoElegido.nombre, this.productoElegido.precio_unitario, this.productoElegido.categoria, this.productoElegido.stock, this.productoElegido.imagen).subscribe(() => {
      this.obtenerProductos();
    });
    
  }

  editarProducto(codigo: string) {
    console.log("Código controller" + codigo);
    this.productoElegido = this.productoFormulario.value;
    this.productService.editarProducto(this.productoElegido.nombre, this.productoElegido.precio_unitario, this.productoElegido.categoria, this.productoElegido.stock, this.productoElegido.imagen, codigo).subscribe(
      res => {
        this.obtenerProductos();
      },
      error => {
        this.obtenerProductos();
      },
      () => {
        
      });
  
  }

  decidirAccion(codigo?: string) {
    if(this.accionRealizando === "Insertar") {
      this.insertarProducto();
      console.log("Insercion");
    }else {
      console.log(codigo);
      this.editarProducto(codigo);
      console.log("Edición");
    }
  }

  prepararFormularioParaEditarProducto(codigo: string) {
    console.log("Editar - " + codigo);
    this.buscarProductoPorId(codigo);
    this.actualizarValoresFormulario();
    this.accionRealizando = "Editar";
  }

  prepararFormularioParaInsertarProducto() {
    this.resetearValoresFormulario();
    this.accionRealizando = "Insertar";
  }

  resetearValoresFormulario() {
    this.productoFormulario.setValue({_id: 0, nombre: "", precio_unitario: 0, categoria: "", stock: 0, imagen: ""});
  }

  eliminarProducto(codigo: string) {
    console.log("Eliminar - " + codigo);
    console.log("Antes");
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
        this.productoElegido = element;
      }
    });
  }

  actualizarValoresFormulario() {
    this.productoFormulario.setValue({_id: this.productoElegido._id, nombre: this.productoElegido.nombre, precio_unitario: this.productoElegido.precio_unitario, categoria: this.productoElegido.categoria, stock: this.productoElegido.stock, imagen: this.productoElegido.imagen});
  }
}
