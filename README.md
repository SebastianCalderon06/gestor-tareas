# Gestor de Tareas

Aplicación web desarrollada con Angular que permite administrar tareas mediante operaciones CRUD, filtros y navegación entre una vista general y una vista de detalle. La aplicación consume una API REST para obtener y gestionar las tareas.

## 1. Información del proyecto

- **Nombre:** Gestor de Tareas
- **Framework:** Angular
- **Lenguaje:** TypeScript
- **Estilos:** CSS
- **API REST:** DummyJSON
- **Despliegue:** Netlify

### Enlaces

- **Aplicación publicada:** https://gestortareasde.netlify.app/
- **Repositorio GitHub:** https://github.com/SebastianCalderon06/gestor-tareas

## 2. Tecnologías utilizadas

- Angular CLI 22.2.6
- Node.js 26.13.0
- npm 11.20.0
- TypeScript
- HTML5
- CSS3
- DummyJSON API
- Git y GitHub
- Netlify

## 3. Funcionalidades

La aplicación cuenta con las siguientes funcionalidades:

- Consultar la lista de tareas desde una API REST.
- Crear nuevas tareas.
- Editar el título de una tarea.
- Eliminar tareas.
- Marcar tareas como completadas o pendientes.
- Filtrar tareas por estado: todas, pendientes y completadas.
- Consultar el detalle de una tarea.
- Visualizar contadores de tareas totales, pendientes y completadas.
- Navegar entre la lista y el detalle de cada tarea.
- Diseño adaptable a diferentes tamaños de pantalla.

## 4. Instalación y ejecución

### Requisitos previos

- Node.js instalado.
- npm instalado.
- Angular CLI.

### Clonar el repositorio

```bash
git clone https://github.com/SebastianCalderon06/gestor-tareas.git
```

### Entrar al proyecto

```bash
cd gestor-tareas
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar la aplicación

```bash
ng serve --open
```

La aplicación estará disponible en:

`http://localhost:4200/`

## 5. Estructura del proyecto

La aplicación está organizada de la siguiente manera:

```text
src/
└── app/
    ├── pages/
    │   ├── task-list/
    │   │   ├── task-list.ts
    │   │   ├── task-list.html
    │   │   └── task-list.css
    │   │
    │   └── task-detail/
    │       ├── task-detail.ts
    │       ├── task-detail.html
    │       └── task-detail.css
    │
    ├── services/
    │   └── task.ts
    │
    ├── app.config.ts
    ├── app.routes.ts
    ├── app.html
    └── app.ts
```

### Descripción de los componentes principales

- **TaskList:** permite visualizar, crear, editar, eliminar y filtrar tareas.
- **TaskDetail:** muestra la información individual de una tarea.
- **TaskService:** centraliza la comunicación con la API REST.
- **App Routes:** configura las rutas de navegación.
- **App Config:** configura los proveedores necesarios para la aplicación.

## 6. API REST

Se utiliza la API pública DummyJSON:

`https://dummyjson.com/todos`

El servicio implementa las operaciones necesarias para gestionar las tareas:

- GET: consultar tareas.
- POST: crear tareas.
- PUT: actualizar tareas.
- DELETE: eliminar tareas.

**Nota:** DummyJSON simula las operaciones de escritura, pero no almacena permanentemente los cambios realizados. Por esta razón, las modificaciones pueden no mantenerse después de actualizar la aplicación.

## 7. Rutas de navegación

La aplicación cuenta con dos rutas principales:

| Ruta | Descripción |
|---|---|
| `/` | Muestra la lista de tareas. |
| `/tasks/:id` | Muestra el detalle de una tarea según su identificador. |

## 8. Pruebas unitarias

Se utiliza Vitest para ejecutar las pruebas unitarias.

Para ejecutar las pruebas:

```bash
ng test --watch=false
```

### Resultados obtenidos

- Archivos de prueba aprobados: 4.
- Pruebas ejecutadas: 8.
- Pruebas aprobadas: 8.
- Pruebas fallidas: 0.

## 9. Compilación de producción

Para generar la versión de producción:

```bash
ng build
```

Resultados obtenidos:

| Métrica | Resultado |
|---|---:|
| Tamaño inicial del bundle | 244.77 kB |
| Transferencia estimada | 66.91 kB |
| Tiempo de compilación | 1.782 segundos |

## 10. Métricas del proyecto

Se utilizó CLOC para analizar el código fuente mediante:

```bash
npx cloc src
```

Resultados:

| Lenguaje | Archivos | Líneas de código |
|---|---:|---:|
| TypeScript | 11 | 398 |
| HTML | 4 | 135 |
| CSS | 4 | 121 |
| **Total** | **19** | **654** |

### Resultados de Lighthouse

Evaluación realizada en modo móvil:

| Categoría | Puntuación |
|---|---:|
| Performance | 49 |
| Accessibility | 84 |
| Best Practices | 100 |
| SEO | 90 |

## 11. Despliegue

La aplicación fue publicada utilizando Netlify y está disponible públicamente en:

https://gestortareasde.netlify.app/

El proyecto se encuentra conectado al repositorio de GitHub para facilitar su actualización y despliegue.

## 12. Autoría y recursos

- Repositorio: https://github.com/SebastianCalderon06/gestor-tareas
- API: https://dummyjson.com/docs/todos
- Documentación oficial de Angular: https://angular.dev/
- Documentación de Vitest: https://vitest.dev/
- Documentación de Netlify: https://docs.netlify.com/

---

**Proyecto académico: Gestor de Tareas desarrollado con Angular.**