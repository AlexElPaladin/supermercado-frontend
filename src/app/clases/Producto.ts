export class Producto {

    constructor( nombre: string, precio_unitario: number, categoria: string, stock: number, imagen: string, _id?: string, unidades?: number) {
        this._id = _id;
        this.nombre = nombre;
        this.precio_unitario = precio_unitario;
        this.categoria = categoria;
        this.stock = stock;
        this.imagen = imagen;
        this.unidades = unidades;
    }

    _id?: string;
    nombre: string;
    precio_unitario: number;
    categoria: string;
    stock: number;
    imagen: string;
    unidades?: number;
    
    toString() {
        return this.nombre + " " + this.precio_unitario + " " + this.categoria + " " + this.stock;
    }
}