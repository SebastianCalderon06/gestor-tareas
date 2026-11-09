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
- **Cuaderno NotebookLM:** https://notebook.google.com/notebook/f619f0bd-05e9-41e2-8d77-2c7fc2de6bd3

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

### Investigación breve de Angular (7 bloques)

1. **Panorama:** Angular es un framework mantenido por Google, de código abierto y con licencia MIT. Trabaja principalmente con TypeScript y permite organizar aplicaciones mediante componentes. En este proyecto usamos Angular 22. **Error y solución:** [anotar una duda o dificultad real y cómo la resolvieron].
2. **Instalación:** Angular CLI permite crear y ejecutar proyectos. Con `npm install` instalamos las dependencias y con `ng serve --open` iniciamos la aplicación. **Error y solución:** [completar con su experiencia].
3. **Componentes:** Dividimos el trabajo entre `TaskList` y `TaskDetail`. Usamos plantillas HTML, eventos como `(click)`, `@if`, `@for` y `ngOnInit` para cargar tareas. **Pendiente:** demostrar un componente reutilizable usado tres veces (por ejemplo, una tarjeta de estadísticas con entradas). **Error y solución:** [completar].
4. **Estado y reactividad:** `signal()` permite actualizar valores y reflejar cambios en la pantalla; lo usamos con las tareas y los filtros. `TaskService` concentra las peticiones HTTP, pero **falta demostrar estado reactivo compartido entre dos componentes**. **Error y solución:** [completar].
5. **Rutas y API:** Angular Router permite acceder a la lista (`/`) y al detalle (`/tasks/:id`). Con `HttpClient` realizamos operaciones GET, POST, PUT y DELETE sobre DummyJSON; mostramos estados de carga y mensajes de error. **Error y solución:** [completar].
6. **Pruebas:** Utilizamos Vitest y archivos `.spec.ts` para verificar componentes y servicios. En la ejecución registrada pasaron 8 pruebas. **Error y solución:** [completar].
7. **Ecosistema y despliegue:** Utilizamos Angular CLI para compilar, CSS propio para los estilos, GitHub para colaborar y Netlify para publicar. Angular también dispone de DevTools y bibliotecas de interfaz. **Error y solución:** [completar].


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

**Tiempo de configuración inicial:** [PENDIENTE: minutos reales desde la instalación hasta ver la app funcionando].


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


![Resultados de las pruebas](Screenshot%202026-11-08%20134038.png)

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
| Tamaño total de la carpeta `dist` | [PENDIENTE: medir en KB] |

![Compilación de producción](Screenshot%202026-11-08%20134055.png)

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

<!-- CAPTURA: resultado de npx cloc src. Imagen: cloc.png -->
![Líneas de código](Screenshot%202026-11-08%20134115.png)

### Resultados de Lighthouse

Evaluación realizada en modo móvil:

| Categoría | Puntuación |
|---|---:|
| Performance | 86 |
| Accessibility | 85 |
| Best Practices | 100 |
| SEO | 90 |

*Se actualizaron Performance y Accessibility según la última captura recibida (8 de noviembre de 2026). Repetir la medición si cambia el código.*


![Resultados de Lighthouse](Screenshot%202026-11-08%20134201.png)

### Horas de trabajo y dificultad

| Integrante | Horas trabajadas | Dificultad de Angular (1 a 5) |
|---|---:|---:|
| [Nombre 1] | [PENDIENTE] | [PENDIENTE] |
| [Nombre 2] | [PENDIENTE] | [PENDIENTE] |
| [Nombre 3] | [PENDIENTE] | [PENDIENTE] |
| [Nombre 4, si aplica] | [PENDIENTE] | [PENDIENTE] |
| **Total / promedio** | **[SUMA]** | **[PROMEDIO]** |

## 11. Despliegue

La aplicación fue publicada utilizando Netlify y está disponible públicamente en:

https://gestortareasde.netlify.app/

El proyecto se encuentra conectado al repositorio de GitHub para facilitar su actualización y despliegue.


![Aplicación en Netlify](Screenshot%202026-11-08%20134014.png)

## 12. Autoría y recursos

**Integrantes y aportes:** [agregar nombres, tarea realizada por cada integrante y enlaces o capturas de sus commits].


### Uso de IA y NotebookLM

Utilizamos NotebookLM para estudiar los conceptos de Angular y apoyar la preparación del informe y la exposición. También consultamos ChatGPT para aclarar dudas y revisar el README. Las explicaciones técnicas deben contrastarse con la documentación y el código del proyecto antes de la entrega.

- **Cuaderno:** https://notebook.google.com/notebook/f619f0bd-05e9-41e2-8d77-2c7fc2de6bd3
- **Fuentes cargadas:** [anotar las fuentes que realmente agregaron].
- **Preguntas realizadas a la IA:** Explícame los componentes TaskList y TaskDetail, el servicio TaskService, las rutas, los Signals, el consumo de DummyJSON y las pruebas.

Utiliza ejemplos sencillos y explica los términos técnicos. Distingue entre las funcionalidades comprobadas en el código y las que no puedes verificar.

Actúa como profesor universitario de programación web. Necesito investigar Angular para un proyecto académico.

Desarrolla estos 7 bloques:

1. Panorama: origen, creador, mantenimiento, versión, licencia y filosofía.
2. Instalación: Angular CLI, creación del proyecto y estructura de carpetas.
3. Componentes: plantillas, inputs, outputs, eventos, condicionales, listas y ciclo de vida.
4. Estado y reactividad: Signals, servicios y estado compartido.
5. Rutas y API REST: Angular Router, HttpClient, GET, POST, PUT y DELETE.
6. Pruebas: herramientas y pruebas unitarias de componentes.
7. Ecosistema y despliegue: CLI, DevTools, build y Netlify.

Para cada bloque incluye qué es, para qué sirve, un ejemplo sencillo y las fuentes oficiales utilizadas. Utiliza únicamente las fuentes cargadas. No inventes experiencias de nuestro grupo. Explica cualquier dato que no puedas verificar.



- Repositorio: https://github.com/SebastianCalderon06/gestor-tareas
- API: https://dummyjson.com/docs/todos
- Documentación oficial de Angular: https://angular.dev/
- Documentación de Vitest: https://vitest.dev/
- Documentación de Netlify: https://docs.netlify.com/
- Documentación de Lighthouse: https://developer.chrome.com/docs/lighthouse/overview
- Documentación de Angular Signals: https://angular.dev/guide/signals
- Documentación de Angular Router: https://angular.dev/guide/routing

---

**Proyecto académico: Gestor de Tareas desarrollado con Angular.**