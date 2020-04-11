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

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'gestion-productos', component: GestionProductosComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiendaComponent,
    GestionComponent,
    GestionProductosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductosService],
  
  bootstrap: [AppComponent]
  
})

export class AppModule { }
