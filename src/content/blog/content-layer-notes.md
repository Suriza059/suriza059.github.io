---
title: 'Actividades de Bases de Datos - Parte 2'
publishDate: 2026-10-06
tags:
  - normalización
  - sql
  - base de datos
description: 'Continuación de las actividades realizadas en clase de bases de datos.'
draft: false
---

Aquí continúo con las actividades que realizo en la clase de bases de datos: lo que aprendí y cómo fue cada ejercicio.

---

## Normalización

![Normalización](./normalizacion.jpeg)

### ¿Qué se aprendió en clase?

° La foto anterior muestra algunos de los apuntes tomados en clase que ayudaron al mejor entendimiento del tema.
° La normalización es un proceso que sirve para organizar las tablas de una base de datos, evitando datos repetidos y problemas al insertar, actualizar o eliminar información.

° Se realiza por etapas llamadas formas normales:

1. Primera Forma Normal (1FN): cada campo debe tener un solo valor (valores atómicos) y no debe haber grupos repetidos.
2. Segunda Forma Normal (2FN): además de estar en 1FN, todos los atributos deben depender de la llave primaria completa, no solo de una parte de ella.
3. Tercera Forma Normal (3FN): además de estar en 2FN, ningún atributo debe depender de otro atributo que no sea llave (no debe haber dependencias transitivas).

## SQL

![SQL](./sql.jpeg)

### ¿Qué se aprendió en clase?

° SQL es el lenguaje que se usa para crear, consultar y manipular bases de datos relacionales.

° Sus comandos se dividen en grupos, por ejemplo:

1. DDL (definición de datos): CREATE, ALTER y DROP, para crear o modificar tablas.
2. DML (manipulación de datos): INSERT, UPDATE y DELETE, para agregar, cambiar o borrar registros.
3. Consultas: SELECT, junto con WHERE, ORDER BY, GROUP BY y JOIN, para obtener la información que se necesita.

### Ejercicio realizado

✏️ Explica en qué consistía el ejercicio. Por ejemplo: "En este taller creamos las tablas de ___ y realizamos consultas para ___. Me costó entender ___, pero después de practicar ___."

---

<!--
## Título de la siguiente actividad

![Descripción de la foto](./nombre-de-la-foto.jpeg)

### ¿Qué se aprendió en clase?

Texto.

### Ejercicio realizado

Texto.

---
-->
