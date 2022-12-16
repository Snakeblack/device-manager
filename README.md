Esta es un proyecto de aplicación web creado con [Next.js](https://nextjs.org/) generado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

La pagina actualmente esta en desarollo, pero aun asi puedes verla en [devicemanager.mretamozo.com](https://devicemanager.mretamozo.com).

Si quieres correr el proyecto en tu maquina local, sigue los siguientes pasos:

### Prerequisitos

- [Node.js](https://nodejs.org/es/)
- [Pnpm](https://pnpm.io/)
- [MySQL](https://www.mysql.com/)

### Instalación

1. Clona el repositorio
2. Instala las dependencias con `pnpm install`

### Configuración

1. Crea un archivo `.env.local` en la raiz del proyecto
2. Agrega las siguientes variables de entorno:

    ```bash
    # Database
    DB_USER=root
    DB_DATABASE=dispositivos
    DB_HOST=localhost
    DB_PASSWORD=[tu contraseña]
    DB_PORT=[tu puerto de mysql]
    ```

3. Crear la base de datos con el nombre `dispositivos` en tu servidor de MySQL.
4. Crea las tablas con los statements que se encuentran en el archivo `db.sql` en el directorio `database`.

### Correr el proyecto

1. Corre el proyecto con `pnpm dev run`
2. Abre [localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

## Aprende más

Para aprender más sobre Next.js, echa un vistazo a los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

Puedes ver el [repositorio de Next.js en GitHub](https://github.com/vercel/next.js/).

## Despleado en Vercel

Este proyecto esta desplegado en [Vercel](https://vercel.com/).


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
