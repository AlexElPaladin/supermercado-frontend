export class Producto {

    constructor( nombre: string, precio_unitario: number, categoria: string, stock: number, imagen: string, _id?: string ) {
        this._id = _id;
        this.nombre = nombre;
        this.precio_unitario = precio_unitario;
        this.categoria = categoria;
        this.stock = stock;
        this.imagen = imagen;
    }

    _id?: string;
    nombre: string;
    precio_unitario: number;
    categoria: string;
    stock: number;
    imagen: string;
    
    toString() {
        return this.nombre + " " + this.precio_unitario + " " + this.categoria + " " + this.stock;
    }
}