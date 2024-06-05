# Haomai's Weather Finder
Este proyecto consiste en un test encomendado por el equipo de Haomai.

## Pasos para levantar el proyecto localmente

1. Clonar el repositorio:
```
 git clone https://github.com/Picoquio/weather-app-haomai.git 
```

2. En la consola, situarse a nivel raíz del proyecto e instalar dependencias:
```
npm install
```

3. Levantar el proyecto en modo de desarrollo:
```
npm run dev
```
4. Una vez levantado, el proyecto estará disponible en `http://localhost:5173/`


## Cuestiones principales

La idea del proyecto es consultar información del clima a la api https://openweathermap.org/current en base a una latitud y longitud ingresados por el usuario. Para ello contamos con dos páginas ubicadas en la carpeta `Pages`:
- `FormPage`: donde el usuario ingresa los datos en cuestión.
- `WeatherDetailsPage`: donde se le muestra al usuario los datos devueltos por la API.
  
Para la comunicación entre páginas se ha hecho uso del `Context` provisto por React.

### Conexión con la API
La lógica de la conexión con la API se encuentra en el archivo `openWeatherMap.ts`, dentro de la carpeta `api`. La función encargada de hacer la llamada tiene el nombre de `GetWeather`, y recibe como parámetro un objeto de tipo `APICallObject` (ver interface en la parte superior del mismo archivo).

### Validaciones principales
- En la `FormPage` se validan los campos del formulario y el botón de submit. Éste se deshabilita cuando el formulario es inválido o cuando se está ejecutando la petición a la API. En cuanto a los campos, ambos son requeridos y se validan valores mínimos y máximos, a saber:
  - Latitud: su valor debe oscilar entre -90 y 90.
  - Longitud: su valor debe oscilar entre -180 y 180.
- En la `WeatherDetailsPage` se valida la existencia de los datos del clima en el `Context`. Si no existiesen, se navega automáticamente hacia la `FormPage`.


### Themes
A pedido de la consigna, en la `WeatherDetailsPage` se ha incorporado una imagen de fondo dinámica según el tipo de clima recibido. Hay una diferente para cuatro tipos de clima:
- Soleado
- Nublado
- Lluvia
- Nieve

### Paquetes de terceros utilizados:
A continuación se listan las dependencias instaladas manualmente (el resto fueron instaladas automáticamente al crear el proyecto con [Vite](https://vitejs.dev/guide/)):
- Dependencias:
    - React Router: para la navegación entre páginas. https://reactrouter.com/en/main
    - React Hook Form: para el manejo del formulario. https://react-hook-form.com/ 
    - React Hot Toast: para notificar al usuario a través de un toast en caso de un fallo al hacer el _fetch_, https://react-hot-toast.com/
- Dependencias de desarrollo:
  - Tailwindcss: para los estilos utilizados. https://tailwindcss.com/docs/installation

Consultar versiones en el archivo `package.json`
 