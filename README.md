# Proyecto del curso FullStack
Demo de la aplicación Grumpy (veterinaria).
La aplicación se basa en la gestión de clientes y mascotas y dar de alta citas desde un calendario.

# Instalación

```bash
git clone https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani.git
cd MEAN-PetStore
npm install
npm start

```

# Demo online
https://app-grumpy.herokuapp.com

## MEAN - MongoDB + Express + AngularJS + NodeJS
![Esquema de peticiones](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/dani/master/public/images/readme_img/image6.jpg)

## Modelo de datos

El principal objeto del modelo de negocio es:

- Cita, que teniendo una 
	-  fecha y hora de inicio y fin, estaria 
	-  relacionada con una sola mascota, que a su vez estaria 
		-  relacionada con un solo cliente.


![Modelo de Datos](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/MEAN-PetStore/master/public/images/modelo-datos.png)

## Diagrama de Flujo (Clientes - Mascotas)
![Diagrama de flujo clientes y mascotas](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/dani/master/public/images/readme_img/image1.png)
En este diagrama representa de forma gráfica como se dan de alta a los clientes y a las mascotas.

## Diagrama de Flujo (Calendario - Citas)
![Diagrama de flujo calendatio y citas](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/dani/master/public/images/readme_img/image3.png)
Este diagrama representa de forma gráfica como dar crear citas desde el calendario y horario de citas.

## RESTfull Services API
| MÉTODO  |  URL  |  BODY  |  RESPONSE |
|---|---|---|---|
|  GET  |  api/customers  |    |  res.json(customers) |
|  GET  |  api/customers/:id  |    |  res.json(customer) |
|  GET  |  api/customers/:id/pets  |    |  res.json(pets) |
|  POST  |  api/customers  |  Json  |  res.json(customer) |
|  PUT  |  api/customers/:id  |  Json  |  res.json(customer) |
|  GET  |  api/pets/:id  |    |  res.json(pets) |
|  POST  |  api/pets  |  Json  |  res.json(pet) |
|  PUT  |  api/pets/:id  |  Json  |  res.json(pet) |
|  DELETE  |  api/pets/:id  |    |  res.sendStatus(200) |
|  GET  |  api/appointments  |    |  res.json(appointments) |
|  GET  |  api/appointments/:id  |    |  res.json(appointment) |
|  GET  |  api/appointmentsByDate/:fromdate/:todate  |    |  res.json(appointmentsByDate) |
|  POST  |  api/appointments  |  Json  |  res.json(appointment) |
|  PUT  |  api/appointments/:id  |  Json  |  res.json(appointment) |
|  DELETE  |  api/appointments/:id  |    |  res.sendStatus(200) |

## Todas las pantallas 

A continuacion el conjunto de pantallas con enlaces a los ficheros de codigo encargados de implementarlas.

### Gestión de clientes y macotas

#### Lista de clientes:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/tree/master/public/app/customerList
![lista de clientes](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/dani/master/public/images/readme_img/image8.jpg)

#### Detalles de cliente:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/tree/master/public/app/customerDetails
![detalles de cliente](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/dani/master/public/images/readme_img/image4.jpg)

#### Detalles de mascota:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/tree/master/public/app/petDetails
![detalles de mascota](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/dani/master/public/images/readme_img/image5.jpg)

#### Calendario de citas:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/tree/master/public/app/appointmentsCalendar
![Calendario de citas](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/dani/master/public/images/readme_img/image7.jpg)

#### Horario y Detalles de las citas:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/tree/master/public/app/appointments
![detalles de horarios y citas](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/dani/master/public/images/readme_img/image2.jpg)

## Configuración general

Estos son los archivos donde aparecen las configuraciones del proyecto
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/master/public/app/app.config.js
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/master/public/app/app.module.js

## Schemas de MongoDB para mi aplicación (ejemplo con Pets)

Esquema de la colección de datos en MongoDB:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/master/models/pets-model.js

Hacemos referencia a ellos (con un request) cada vez que se quiera utilizarlos:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/b7f7631b497193757edff525427688af82eada1a/routes/pets-route.js#L1

## Servicios REST

Un enlace a la línea donde está la definición de la url REST:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/b7f7631b497193757edff525427688af82eada1a/routes/pets-route.js#L10

## Controlador Angular

### Componente.js
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/master/public/app/petDetails/petDetails.component.js

### Componente.html
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/master/public/app/petDetails/petDetails.html

### Configuración del Módulo:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/b7f7631b497193757edff525427688af82eada1a/public/app/petDetails/petDetails.component.js#L11

### Ruta Angular
Mis rutas angular están en:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/master/public/app/app.config.js

Un ejemplo es esta ruta, que nos muestra la vista de los detalles de las mascotas:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/b7f7631b497193757edff525427688af82eada1a/public/app/app.config.js#L17

### Ficheros <script> incluidos en el index.html
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/master/public/index.html#L33

## Servicios de AngularJS con Resource
Creamos un servicio, "service" en Angular, con factory y resource. Usamos $resource en lugar de $http.

Para utilizar Resource n el index.html debemos agregar el link al archivo js:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/b7f7631b497193757edff525427688af82eada1a/public/index.html#L23 

Creamos el servicio en nuestra carpeta de servicios:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/master/public/app/services/customersService.js

Y lo utilizo por ejemplo en :
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/b7f7631b497193757edff525427688af82eada1a/public/app/customerDetails/customerDetails.component.js#L20

## Directivas en Angular

https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/master/public/app/directives/directives.js

Ejemplo de directivas en un formulario:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/b7f7631b497193757edff525427688af82eada1a/public/app/directives/directives.js#L4 

Usado en:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/b7f7631b497193757edff525427688af82eada1a/public/app/petDetails/petDetails.html#L7

## Eventos en AngularJS - Componentes anidados

En angularjs tenemos una forma muy sencilla de manejar los eventos que suceden en nuestras aplicaciones gracias a $broadcast, $emit y $on. 

Con $emit y $broadcast lanzamos los eventos y con $scope.$on los capturamos.

En el proyecto lo usamos en el apartado de citas (appointments). 
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/tree/master/public/app/appointments 

En diferentes partes de los controladores se usa $broadcast, $emit y $on.
Ej: $emit (El componente hijo envia los datos al padre): 
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/b7f7631b497193757edff525427688af82eada1a/public/app/appointments/appointmentsDay/appointmentsDay.component.js#L55 

Ej: $on (Con $on los componentes escuchan los datos):
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/b7f7631b497193757edff525427688af82eada1a/public/app/appointments/appointmentsDay/appointmentsDay.component.js#L22
 
Ej: $broadcast  (El componente padre envia los datos al hijo):
https://github.com/Curso-Fullstack-MEAN-Octubre2017/dani/blob/b7f7631b497193757edff525427688af82eada1a/public/app/appointments/appointments.component.js#L23





