# Lovotti Martin - Curso CODERHOUSE Backend

Desafio 14

eCommerce Backend

## Instalación

. Parado en la raíz del proyecto corré el comando

```
npm install
```

    para instalar todas las dependecias del proyecto

. Es Necesario

Instalar XAMPP
Inicializar Apache y MySQL
En http://localhost/phpmyadmin/ crear la base de datos "ecommerce" para poder interactuar con ella
Crear un archivo .env con la variable MONGO_URL="Ruta de Mongo Atlas"

. Usá

```
node app.js xxxx
```

    para correr el proyecto, xxxx es el numero de puerto a utilizar. El proyecto estará disponible en http://localhost:xxxx --> por ejemplo node app.js 8080 --> proyecto disponible en http://localhost:8080

.
En /info se devuelve la Info solicitada en el desafio
En /api/randoms se generan los numeros randoms y se devuelve los mismos con la cantidad de veces que salio cada uno. Si se quiere especificar una cantidad de numeros a genera colocarlo como query en la ruta por ej --> /api/randoms?cant=5000000

2022 - Curso de Backend en CoderHouse
