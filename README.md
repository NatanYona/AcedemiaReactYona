# Academia Rambam

La Academia Rambam es un proyecto basado en React desarrolador por Natán Yona. En este proyecto se utilizo HTML, CSS, SCSS, JS y algunas librerias de JS para tener una mejor experiencia como tambien, una mas agredable visualmente.
A lo largo de este proyecto podremos tener un experiencia de compra de e-commerce junto a un tutorial a continuacion, como tambien la division de productos por tipo y un carrito de E-commerce completamente funcional.

## Division por categoria de productos:

Dentro de la pagina principal del proyecto podremos ver un catalogo que no separa los productos por categorias, esto ocurre una vez que utilizamos la barra de navegacion en la parte superior, y mediante la tecnologia de la libreria de `react-router-dom` podemos navegar a los productos separados por su categoria.

## Utilizacion de Firebase:

El proyecto utiliza Firebase no unicamente para el almacenaje de pedidos una vez finalizado el proceso de compra, si no tambien a la hora de almacenar el catalogo de sus propios productos. Todos los catalogos de la pagina utilizan la tecnologia de Firebase `Cloud FireStore` para almacenar su catalogo de productos con facil acceso para agregar o quitar de sus catalogos, como tambien a la hora de generar pedidos de compra utilizando una `ID` unica correspondiente a cada pedido.
 
## Tutorial de compra:

En este proyecto podremos utilizar la pagina principal o separarlo en categorias, ir seleccionado productos junto a la cantidad que queremos de cada uno e ir agregandolos a nuestro carrito.
Una vez agregado los productos que uno quiera comprar, se ira a su carrito y apretara el boton `Finalizar Compra`. Esto mostrara un modal que solicitara los datos del cliente para generar un pedido con un `ID` unica que se encontrara tambien agregada en la `Firebase Cloud FireStore` para que el vendedor tambien tenga registro de este pedido junto a los productos solicitados, los datos del comprador como tambien la fecha y el momento de la compra.

![Ejemplo de compra](https://media.giphy.com/media/oUftK83DH8w1gnEJUc/giphy.gif)

![Ejemplo de FireBase](https://cdn.discordapp.com/attachments/429833252656644097/1018969633891549284/unknown.png)
## Lista de librerias utilizadas:

[Material UI](https://mui.com/)

[Boostrap](https://www.npmjs.com/package/bootstrap)

[react-router-dom](https://www.npmjs.com/package/react-router-dom)

[Firebase](https://firebase.google.com/) 

[Nodemon Sass](https://www.npmjs.com/package/nodemon)
