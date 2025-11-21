# React Market App 🛒

Este proyecto se desarrolló como entrega de trabajo final para el curso de React de CoderHouse

![imagenapp](/public/Home.jpg)

Se trabajó con una colección de categorías y otra de productos para el despliegue de los items, cada producto se relaciona con una categoría. Ambas entidades se obtienen desde firestore y ahi mismo se almacenan las compras realizadas.

Pantalla de categorías:

![imagenapp](/public/Categorias.jpg)

Pantalla de productos:

![imagenapp](/public/Productos.jpg)

Los productos se agregan al carrito desde su propia pantalla de detalle:

![imagenapp](/public/Item.jpg)

Y finalmente visualizamos nuestras compras en el carrito, antes de cargar los datos y confirmar la compra:

![imagenapp](/public/Carrito.jpg)

Se agregaron además algunos componentes adicionales para robustecer visualmente la App, como "Cupones" o "Contacto". 

### Instalación ⚙️

1. Clonar el repositorio.
2. Ejecutar el comando `cd landing-ecommerce`para moverse a la carpeta raiz del proyecto.
3. Instalar dependencias con el comando `npm install`.
4. Para levantar el proyecto de manera local ejecutar el comando `npm run dev`.


### Requerimientos ⚙️

Node.js: >= 18.0.0
(Requerido por Vite 7 y Firebase 12)

NPM: >= 9.0.0

### Librerias utilizadas:

- [Firebase](): utilizado como base datos
- [React Router Dom](): utilizada para la navegacion por rutas de la app
- [React Bootstrap](): utilizada para el styling de la app sobre todo en botones y formularios
- [SweetAler2](): Alertas y confirmaciones en la app
- [React Hook Form](): Validacion de formularios


 
