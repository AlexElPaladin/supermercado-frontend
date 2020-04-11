import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Producto } from "./clases/Producto";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { 

    
  }

  obtenerProductos(): void {
    console.log("Getting products changed");
    this.http.get("http://localhost:3000/productos").subscribe(x => {
      console.log(x);
    });
    
  }

  insertarProductos():void {
    this.http.post<Producto>("http://localhost:3000/productos", ).subscribe(x => {
      console.log("HOla");
    });
  }


}
