import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from './clases/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  obtenerClientes() {
    console.log("Obtener clientes");
    return this.http.get("http://localhost:3000/clientes");
  }

  insertarCliente(cliente: Cliente) {
    return this.http.post("http://localhost:3000/clientes", cliente);
  }

  modificarCliente(cliente: Cliente, id) {
    console.log("LLega a editar en controller");
    return this.http.put("http://localhost:3000/clientes/"+id, cliente);
  }

  eliminarCliente(id: string) {
    console.log(id);
    return this.http.delete("http://localhost:3000/clientes/"+id);
  }
}
