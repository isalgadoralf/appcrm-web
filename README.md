# AppCRM Web

Este proyecto es la parte del frontend de la aplicación CRM. A continuación, se detallan los pasos necesarios para configurar y ejecutar el proyecto utilizando Jenkins y NodeJS.

## Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener lo siguiente configurado:

### Preparando el equipo
   - Contar con algun Servidor Web instalado

### Disponibilidad de puerto
   - El servidor se ejecuta sobre el puerto 80/http, por lo que este debe estar disponible para la ejecución

### Configurar variables de entorno
   - Se deben setear las variables parametrizadas en Jenkins tras el despliegue, estas son `HTDOCS_DIR` donde se define la ruta del despliegue de la app según se tenga configurado el servidor web y `BACKEND_URL` que es la URL del servidor del backend.

### Paginas disponibles
   - Las paginas disponibles para el registro son localhost o equivalentes y localhost/venta.html o equivalente.