import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Cliente } from "../clases/Cliente";
import { ClienteService } from "../cliente.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-solo-registro',
  templateUrl: './solo-registro.component.html',
  styleUrls: ['./solo-registro.component.css']
})
export class SoloRegistroComponent implements OnInit {

  clienteFormulario: any;

  constructor(private formBuilder: FormBuilder, private clienteServicio: ClienteService, private route: Router) {

    this.clienteFormulario = this.formBuilder.group({
      nombre: [""],
      apellidos: [""],
      email: [""],
      contrasena: [""],
      movil: [""],
      direccion: [""],
      direccion_entrega: [""]
    });


  }

  insertarCliente() {
    let cliente = this.clienteFormulario.value;
    this.clienteServicio.insertarCliente(cliente).subscribe(x => {
      console.log(x);
      this.route.navigate(["iniciar-sesion"]);
    });
  }


  ngOnInit(): void {

  }

}
