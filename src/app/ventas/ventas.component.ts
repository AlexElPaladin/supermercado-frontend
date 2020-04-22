import { Component, OnInit } from '@angular/core';
import { VentasService } from '../ventas.service';
import { Venta } from '../clases/Venta';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventas: Venta[] = [];
  constructor(private ventasService: VentasService) { 

    ventasService.obtenerVentas().subscribe(x => {
      console.log(x);
      this.ventas = x as Venta[];
    });
  }

  ngOnInit(): void {
  }

}
