import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Cliente } from "../clases/Cliente";
import { ClienteService } from "../cliente.service";

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})

export class GestionClientesComponent implements OnInit {
  clienteFormulario: any;
  accionRealizando: string;
  clienteElegido: Cliente;
  clientes: Cliente[];

  constructor(private clienteServicio: ClienteService, private formBuilder: FormBuilder) {
    this.clienteFormulario = this.formBuilder.group({
      _id: [""],
      nombre: [""],
      apellidos: [""],
      email: [""],
      contrasena: [""],
      movil: [""],
      direccion: [""],
      direccion_entrega: [""]
    });
    
  }

  decidirAccion(id: string) {
    if(this.accionRealizando === "Insertar") {
      this.insertarCliente();
    }else {
      this.editarCliente(id);
    }
  }

  prepararFormularioParaInsertarCliente() {
    this.resetearValoresFormulario();
    this.accionRealizando = "Insertar";
  }

  resetearValoresFormulario() {
    this.clienteFormulario.setValue({_id: "", nombre: "", apellidos: "", email: "", contrasena: "", movil: "", direccion: "", direccion_entrega: ""});
  }


  obtenerClientes() {
    this.clienteServicio.obtenerClientes().subscribe((x) => {
      this.clientes =  x as Cliente[];
    });
  }

  ngOnInit(): void {
    this.obtenerClientes();
    this.accionRealizando = "Insertar";
  }

  insertarCliente() {
    this.clienteElegido = this.clienteFormulario.value;
    this.clienteServicio.insertarCliente(this.clienteElegido).subscribe(x => {
      console.log(x);
      this.obtenerClientes();
    });
  }

  prepararFormularioParaEditarCliente(id: string) {
    console.log("Aqui");
    this.accionRealizando = "Editar";
    this.encontrarClientePorId(id);
    this.clienteFormulario.setValue({_id: id, nombre: this.clienteElegido.nombre, apellidos: this.clienteElegido.apellidos,
    email: this.clienteElegido.email, contrasena: this.clienteElegido.contrasena, movil: this.clienteElegido.movil, 
    direccion: this.clienteElegido.direccion, direccion_entrega: this.clienteElegido.direccion_entrega});
  }

  encontrarClientePorId(id: string) {
    this.clientes.forEach(cliente => {
      if(cliente._id === id) {
        this.clienteElegido = cliente;
      }
    });
  }

  editarCliente(id: string) {
    console.log("LLega a editar en controller");
    this.clienteElegido = this.clienteFormulario.value;
    this.clienteServicio.modificarCliente(this.clienteElegido, id).subscribe(x => {
      console.log(x);
      this.obtenerClientes();
    });
  }

  eliminarCliente(id: string) {

    console.log(id);

   this.clienteServicio.eliminarCliente(id).subscribe( res => {
      this.obtenerClientes();
    },
    error => {
      this.obtenerClientes();
    },
    () => {

    });
 
  }

}
