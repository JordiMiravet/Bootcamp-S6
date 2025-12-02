# Sprint 6 - WebBudget form 

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-TS-blue?style=for-the-badge)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Tests](https://img.shields.io/badge/Tests-Jasmine-8A4Baf?style=for-the-badge&logo=jasmine&logoColor=white)

## Descripción de la Aplicación:

Este proyecto consiste en una aplicación Angular diseñada para calcular presupuestos web de forma dinámica. El usuario puede seleccionar servicios, ajustar parámetros específicos, generar varios presupuestos, ordenarlos y filtrarlos, e incluso compartirlos mediante una URL personalizada.

La aplicación está dividida en componentes independientes (`standalone`) que se comunican entre sí mediante Eventos, Services y Signals, e incorpora formularios reactivos, validaciones, gestión y filtrado de datos, y un modal generado con ayuda de `Bootstrap 5`.

La funcionalidad se ha construido por niveles:
- Cálculo reactivo del presupuesto
- Popup de ayuda con Bootstrap Modal
- Gestión de múltiples presupuestos
- Ordenación y filtrado
- Compartición de presupuestos vía URL generada dinámicamente

---

## Tecnologías

- `HTML`
- `CSS` / `Bootstrap 5`
- `TypeScript`
- `Angular 20 `
- Testing con `Jasmine` / `Karma`

---

## Estructura del Proyecto

```bash
src/
 └─ app/
     ├─ components/
     │   ├─ budget/
     │   │   ├─ budgets-list/
     │   │   ├─ budget-list-toolbar/
     │   │   └─ budget-item/
     │   ├─ form/
     │   │   ├─ form-main/
     │   │   ├─ option-form/
     │   │   ├─ contact-form/
     │   │   ├─ panel/
     │   │   └─ modal/
     │   ├─ home/
     │   └─ welcome/
     ├─ header/
     ├─ models/
     │   └─ budget-item.model.ts
     └─ services/
         └─ budget.ts
```

---

## Instalación del proyecto

#### Requisitos previos
- Antes de instalar el proyecto asegúrate de tener:
    - node < 22
    - npm < 10
    - Angular CLI (instalado globalmente)
    - Navegador web

1. Clona el repositorio:

```bash
    git clone https://github.com/JordiMiravet/Bootcamp-S6.git
```

2. Instala dependencias:

```bash
    npm install
```

3. Ejecuta el servidor:

```bash
    ng serve
```

4. Abrir en el navegador:

```bash
    http://localhost:4200
```

---

## Vista Previa del proyecto

1. Selección de servicios y cálculo

2. Panel de páginas e idiomas

3. Modal de ayuda

4. Datos del usuario

4. Listado ordenable 
- Mediante input para filtrar por nombre
- Mediante botones:
    - 'Data' : Para ordenar por calendario, 
    - 'Import' : Para ordenar por importe total (€)
    - 'Nombre' : Para ordenar por nombre

6. URL compartible

---

## Tests

Incluye pruebas unitarias con Jasmine/Karma verificando:

// Ahora lo pongo cuando acabe las otras secciones, que no me da la vida xD

---

## GH-Pages
// Ahora cuando lo acabe lo pongo este tambien

---

## Autor

```bash
    Jordi Miravet – Bootcamp S6 : WebBudget App
```