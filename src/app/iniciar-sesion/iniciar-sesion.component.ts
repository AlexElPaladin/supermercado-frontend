import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Cliente } from "../clases/Cliente";
import { Producto } from '../clases/Producto';
import { ProductosService } from '../productos.service';
import { thistle } from 'color-name';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  iniciarSesionFormulario:any;
  mensaje: string;
  ticket: Producto[];
  fecha: Date;
  precioTotal: number;

  constructor(private clienteService: ClienteService, private productoServicio: ProductosService, private formBuilder: FormBuilder) { 
    this.iniciarSesionFormulario = this.formBuilder.group({
      nombre: [""],
      contrasena: [""]
    });
    this.ticket = this.productoServicio.carrito;
    this.fecha = new Date();
    this.precioTotal = productoServicio.precioTotal;
  }

  comprobarDatos() {
    console.log(this.iniciarSesionFormulario.value);
    let nombre = this.iniciarSesionFormulario.value["nombre"];
    let contrasena = this.iniciarSesionFormulario.value["contrasena"];
    let clientes;
    this.clienteService.obtenerClientes().subscribe((x) => {
      clientes = x as Cliente[];
      for (let i = 0; i < clientes.length; i++) {
        const element = clientes[i];
        if (element["nombre"].toLowerCase() === nombre.toLowerCase() && element["contrasena"] === contrasena) {
          console.log("Credenciales correctas");
          console.log(element["nombre"]);
          console.log(element["contrasena"]);
          this.mensaje = "Credenciales correctas, compra realizada, se la enviaremos lo antes posible";
        }
        
      }
    });
    
  }

  ngOnInit(): void {
  }

}
