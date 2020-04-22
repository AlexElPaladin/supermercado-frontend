# Supermercado

> Trabajo de gestión de un supermercado, se podrán realizar altas, modificaciones y bajas tanto a clientes como productos, así como realizar compras online o compras directamente en la tienda usando efectivo o targeta.



## Organización

Lo primero que he realizado ha sido un diagrama de Gantt para tener planeado el tiempo que dedicaré a cada tarea.

![image-20200422102432751](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422102432751.png)



### Diseño de la interfaz

Para ello he utilizado Adobe XD para hacer un mini esquema de como quería que fuera la página web.

![image-20200422100733383](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422100733383.png)



### Base de datos

Para la base de datos he usado MongoDB que es un tipo de base de datos que se integra muy bien con Node js y Angular y que además es una base NOSQL (Not only sql) por lo que me ofrecia más ventajas que hacerla con Mysql,

Para conectar la parte backend hecha con NodeJS, una tecnologia que te permite realizar el backend usando Javascript

![image-20200422101152534](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422101152534.png)



La página utiliza lo que se conoce cómo MEAN:

MongoDB para la base de datos

NodeJS mediante Express para la parte del servidor

Angular para la parte del frontend



## Instrucciones

Lo primero que aparece al entrar en la página web son cuatro opciones

![image-20200422100254096](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422100254096.png)

### Gestión

![image-20200422104717380](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422104717380.png)



#### Gestión clientes

En la gestión de clientes podremos realizar tanto altas, modificaciones y bajas de clientes.

![image-20200422104743443](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422104743443.png)

#### Gestión productos

En la gestión de productos podremos realizar tanto altas, modificaciones y bajas de productos.

![image-20200422104915155](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422104915155.png)

### Pago en tienda

La primera nos permite realizar una compra en la tienda, en esta sección entrarán los cajeros del supermercado para gestionar las ventas y crear el ticket.

![image-20200422103409363](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422103409363.png)

En la parte de la derecha podemos ver todos los productos haciendo scroll, cada producto tiene un código, ese es el que usaremos para registrar un producto y venderlo.

Normalmente en los supermercados las cajeras llevan una especie de pistola que canjea el código de barras que al final no es más que una serie de numeros, por lo tanto el código es cómo si canjeara cada producto.

Para agregar el producto al ticket copiará el código y especificará las unidades y clickará en registrar producto, el producto será automáticamente agregado al ticket, cuando hayamos terminado la compra clickamos en finalizar compra y listo.

Si un cliente va a pagar con tarjeta se lo indicará a la cajera quien tendrá que registrar al cliente con el nombre, apellidos, dirección y nº de targeta, una vez registrado le agregará el código del cliente y automáticamente en el ticket cambiará de pago en efectivo a pago con tarjeta.



### Pago online

En la pantalla principal nos dirigimos a compra online.

![image-20200422104221415](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422104221415.png) 

Lo primero es registrarnos como clientes ya que si no no podremos realizar la compra

Vamos añadiendo los productos que nos interesen y cuando lo tengamos clickamos en el carrito

Ahora elegiremos las cantidades que queramos de cada producto y clickaremos en continuar

![image-20200422104355818](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422104355818.png)

Ahora nos aparecerá una página para confirmar la compra con nuestras credenciales cómo cliente, una vez que lo tengamos clickamos en confirmar datos y comprar.

![image-20200422104538385](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422104538385.png)



### Ventas

Por último podemos ver todas las ventas que se han realizado diariamente desde ventas.

![image-20200422105011912](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422105011912.png)

![image-20200422105036110](C:\Users\alopemar\AppData\Roaming\Typora\typora-user-images\image-20200422105036110.png)

















