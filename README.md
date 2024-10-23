# AppCRM Web

Este proyecto es la parte del frontend de la aplicación CRM. A continuación, se detallan los pasos necesarios para configurar y ejecutar el proyecto utilizando Jenkins y Node.js.

## Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener lo siguiente configurado:

1. *Node.js*
   - Instalar el plugin de NodeJS en Jenkins.
   - Configurar la herramienta de NodeJS en la sección `Tools` del administrador de Jenkins para utilizar la versión 21.6.2.

2. *PM2*
   - Instalar globalmente el paquete pm2 versión 5.4.2 en la máquina donde se ejecuta Jenkins.
```ini
server.port=9091
```
3. *Firewall*
    - Revisa la configuración del Firewall de tu equipo para permitir a Jenkins ejecutar acciones en el equipo 

4. *Puerto 3000 disponible*
   - Asegúrate de que el `puerto 3000` esté libre en el servidor donde se ejecutará la aplicación web. El proyecto se levantará en este puerto.

5. *Pipeline Jenkins*
```groovy
pipeline
pipeline {
    agent any
    tools {
        nodejs('21.6.2')
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/isalgadoralf/appcrm-web.git'
            }
        }
        stage('Initalize Project') {
            steps {
                bat 'npm install -y'
            }
        }
        stage('Run project'){
            steps {
                bat 'pm2 start app.js'   
            }
        }
    }
}
```