![UDD logo](https://github.com/EdduOlv/Proyecto-_Modulo1/assets/156525513/2c9572c9-af59-4edd-a716-f23cc96296b4)


# Proyecto Modulo 7 Aplicación Backend para cliente proyecto 7

Proyecto realizado en Node.js, express.js, cors y dotenv aplicando operaciones CRUD en la creación de usuarios, admin y productos.

## Despliegue en Render

Este link es el enlace previo que se escribe antes de cualquier endpoint.

`https://proyecto-modulo7-server.onrender.com`

## Configuracion de variables de entorno

```
PORT=3000
MONGODB_URI=mongodb+srv://admin:dwfspy7@webapp-ebooks.15kmj.mongodb.net/?retryWrites=true&w=majority&appName=WebApp-ebooks
SECRET=PROYECTO7

```

## Requerimientos del proyecto

 - Implementar autenticación y autorización.
 - Crear dos modelos, uno para el Usuario y otro para el Producto.
 - Utilizar una API pública y mostrar los datos obtenidos en tu interfaz de usuario
 - Implementar operaciones CRUD para el modelo del Producto.
 - Utilizar MongoDB y Mongoose para gestionar la base de datos.
 - MCrear una arquitectura de carpetas y archivos, clara.


 ## Mi proyecto

Mi proyecto consiste en una aplicación backend que cuenta con modelos de usuario, admin y de productos (books), hechos con mongoose además de sus correspondientes controladores y rutas. Las rutas en mi proyecto cuentan con middlewares de autorización correspondientes a user y admin, las rutas ligadas al usuario, en específico las de verificación de token y de actualización no pueden ser consumidas si no se cuenta con su correspondiente autorización, y las rutas ligadas a admin y books cuentan con autorización ligadas al admin, ya que las rutas de creación de libros, como las de actualización y borrar necesitan una autorización de token de administrador para ser consumidas.

Los modelos están relacionados entre sí a través de MongoDB y desplegado en MongoDb Atlas aplicando variables de entorno.

# Estructura de carpetas de mi proyecto

```
Proyecto_Modulo_6
├─ config
│  └─ db.js
├─ controllers
│  └─ adminController.js     
│  └─ bookController.js
│  └─ userController.js 
├─ middleware
│  └─ adminAuth.js     
│  └─ userAuth.js     
├─ models
│  └─ adminModel.js     
│  └─ bookModel.js    
│  └─ userModel.js  
├─ routes
│  └─ adminRoutes.js     
│  └─ bookRoutes.js     
│  └─ userRoutes.js    
├─ .env
├─ .gitignore     
├─ index.js <- ARCHIVO DE ENTRADA
├─ README.md
├─ package-lock.json
└─ package.json

```

## Endpoints de user

|Descripción del Endpoint|	Método|	Endpoint|	Tipo  de Acceso|
|---|----|----|---|
|Registrar un usuario|	POST|	/api/user/register|	Esta ruta no requiere autorización.|
|Iniciar sesión de usuario|	POST|	/api/user/login|	Esta ruta no requiere autorización.|
|Verificar el token del usuario|	GET|	/api/user/verifytoken|	Esta ruta cuenta con autorización de usuario.|
|Actualizar información del usuario|	PUT|	/api/user/update|	Esta ruta cuenta con autorización de usuario.|

## Endpoints de admin

|Descripción del Endpoint|	Método|	Endpoint|	Tipo  de Acceso|
|---|----|----|---|
|Registrar un usuario|	POST|	/api/admin/register|	Esta ruta no requiere autorización.|
|Iniciar sesión de usuario|	POST|	/api/admin/login|	Esta ruta no requiere autorización.|
|Verificar el token del usuario|	GET|	/api/admin/verifytoken|	Esta ruta cuenta con autorización de admin.|
|Actualizar información del usuario|	PUT|	/api/admin/update|	Esta ruta cuenta con autorización de admin.|

## Endpoints de books

|Descripción del Endpoint|	Método|	Endpoint|	Tipo  de Acceso|
|---|----|----|---|
|Crear un producto|	POST|	/api/product/create|	Esta ruta requiere autorización de admin ya que para consumirse tiene que existir un token valido de admin.|
|Leer todos los productos|	GET|	/api/product/readall|	Esta ruta no requiere autorización ya que no es necesaria para ver los productos.|
|Leer un producto específico|	GET|	/api/product/readone|	Esta ruta no requiere autorización ya que no es necesaria para ver un producto.|
|Actualizar un producto|	PUT|	/api/product/update|	Esta ruta requiere autorización de admin ya que para consumirse tiene que existir un token valido de admin.|
|Eliminar un producto|	DELETE|	/api/product/delete	| Esta ruta requiere autorización de admin ya que para consumirse tiene que existir un token valido de admin.|

## Estructura para crear un usuario

```
{
"username": "Nombre usuario",
"email": "correousuario@ejemplo.com",
"password": "contraseña123",
}

```
## Estructura para crear un administrador

```
{
"adminName": "Nombre admin",
"email": "correoadmin@ejemplo.com",
"password": "contraseña123",
}

```
## Estructura para crear un producto

```
{
"title": "Titulo del libro",
"author": "autor del libro",
"publisher": "Editora",
"summary": "resumen del libro",
"pageCount": 100,
"price": 10000
}

```
