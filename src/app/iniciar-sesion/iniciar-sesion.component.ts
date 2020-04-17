import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Cliente } from "../clases/Cliente";

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  iniciarSesionFormulario:any;
  mensaje: string;

  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder) { 
    this.iniciarSesionFormulario = this.formBuilder.group({
      nombre: [""],
      contrasena: [""]
    });

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
