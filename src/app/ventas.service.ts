import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Venta } from "./clases/Venta";

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { 

  }

  registrarVenta(venta: Venta) {
    return this.http.post<Venta>("http://localhost:3000/ventas", venta);
  }

  obtenerVentas() {
    return this.http.get("http://localhost:3000/ventas");
  }

}
