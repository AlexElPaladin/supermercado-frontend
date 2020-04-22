import { Producto } from './Producto';

export class Venta {

    constructor(cliente: string, metodoPago: string, precioTotal: number, fecha: string, productos: Producto[]) {
        this.cliente = cliente;
        this.metodoPago = metodoPago;
        this.precioTotal = precioTotal;
        this.fecha = fecha;
        this.productos = productos;
    }

    cliente: string;
    metodoPago: string;
    precioTotal: number;
    fecha: string;
    productos: Producto[];
}