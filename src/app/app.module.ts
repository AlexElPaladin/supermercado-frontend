import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TiendaComponent } from './tienda/tienda.component';
import { GestionComponent } from './gestion/gestion.component';
import { GestionProductosComponent } from './gestion-productos/gestion-productos.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductosService } from "./productos.service";
import { ReactiveFormsModule } from '@angular/forms';
import { GestionClientesComponent } from './gestion-clientes/gestion-clientes.component';
import { ClienteService } from './cliente.service';
import { CompraOnlineComponent } from './compra-online/compra-online.component';
import { CarritoComponent } from './carrito/carrito.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { SoloRegistroComponent } from './solo-registro/solo-registro.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'gestion-productos', component: GestionProductosComponent },
  { path: 'gestion-clientes', component: GestionClientesComponent },
  { path: 'online', component: CompraOnlineComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'solo-registro', component: SoloRegistroComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
  
  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiendaComponent,
    GestionComponent,
    GestionProductosComponent,
    GestionClientesComponent,
    CompraOnlineComponent,
    CarritoComponent,
    IniciarSesionComponent,
    SoloRegistroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductosService, ClienteService],
  
  bootstrap: [AppComponent]
  
})

export class AppModule { }
