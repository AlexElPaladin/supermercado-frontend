import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Producto } from "./clases/Producto";


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { 

    
  }

  obtenerProductos() {
    console.log("Getting products changed");
    return this.http.get<Producto[]>("http://localhost:3000/productos");
    
  }

  insertarProducto(nombre: string, precio_unitario: number, categoria: string, stock: number) {
    
    let producto = new Producto(nombre, precio_unitario, categoria, stock);
    console.log("Produ" + producto.nombre);
    return this.http.post<Producto>("http://localhost:3000/productos", producto);

  }

  editarProducto(nombre: string, precio_unitario: number, categoria: string, stock: number, codigo: string) {
    console.log("Model " + codigo);
    let producto = new Producto(nombre, precio_unitario, categoria, stock);
    return this.http.put("http://localhost:3000/productos/"+codigo, {"_id": codigo, "nombre": nombre, "precio_unitario": precio_unitario, "categoria": categoria, "stock": stock});
  }

  eliminarProducto(codigo: string) {
    return this.http.delete("http://localhost:3000/productos/"+codigo);
    
  }



}














