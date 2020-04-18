import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Producto } from "./clases/Producto";
import { CarritoComponent } from './carrito/carrito.component';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  carrito: Producto[];
  precioTotal: number;

  constructor(private router: Router, private http: HttpClient) { 
    
  }
 
  obtenerProductos() {
    console.log("Getting products changed");
    return this.http.get<Producto[]>("http://localhost:3000/productos");
    
  }

  insertarProducto(nombre: string, precio_unitario: number, categoria: string, stock: number, imagen: string) {
    
    let producto = new Producto(nombre, precio_unitario, categoria, stock, imagen);
    console.log("Produ" + producto.imagen);
    console.log(producto);
    return this.http.post<Producto>("http://localhost:3000/productos", producto);

  }

  editarProducto(nombre: string, precio_unitario: number, categoria: string, stock: number, imagen: string, codigo: string) {
    console.log("Model " + codigo);
    return this.http.put("http://localhost:3000/productos/"+codigo, {"_id": codigo, "nombre": nombre, "precio_unitario": precio_unitario, "categoria": categoria, "stock": stock, "imagen": imagen});
  }

  eliminarProducto(codigo: string) {
    return this.http.delete("http://localhost:3000/productos/"+codigo);
    
  }

  finalizarCompra(codigoCliente?: string) {
    let nuevoStock;
    this.carrito.forEach(element => {
      nuevoStock = element["stock"] - element["unidades"];
      this.editarProducto(element["nombre"], element["precio_unitario"], element["categoria"], nuevoStock,  element["imagen"], element["_id"]).subscribe(x => {
        console.log(x);
      });
    });
  }


}














