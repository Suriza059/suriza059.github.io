---
title: 'Normalización'
description: 'Evidencias del proceso de normalización: 1FN, 2FN, 3FN y el análisis de dependencias en distintos esquemas.'
tech: ['1FN', '2FN', '3FN', 'BCNF']
order: 2
publishDate: 2026-08-09
---

La normalización es el proceso de organizar las tablas de una base de datos para evitar datos repetidos y problemas al insertar, actualizar o eliminar información. Se hace por pasos, llamados formas normales, y en cada paso se revisan las dependencias entre los atributos.

---

## Conceptos clave

### Formas normales

| Forma normal | Condición |
| --- | --- |
| 1FN | Todos los atributos son atómicos (un solo valor por celda) y no hay grupos repetidos. |
| 2FN | Cumple 1FN y todos los atributos no clave dependen de la clave primaria completa, no de una parte de ella. Solo aplica cuando la clave es compuesta. |
| 3FN | Cumple 2FN y ningún atributo no clave depende de otro atributo no clave (no hay dependencias transitivas). |
| BCNF | Cumple 3FN y todo determinante es una clave candidata. |

### Anomalías que evita la normalización

| Anomalía | Ejemplo |
| --- | --- |
| Inserción | No se puede registrar un doctor nuevo hasta que tenga una cita asignada. |
| Eliminación | Si se cancela la única cita de un paciente, se pierden también sus datos. |
| Actualización | Si un consultorio cambia de piso hay que modificar muchas filas, y si se olvida una, el consultorio queda en dos pisos diferentes. |

---

## Evidencia 1: Taller de normalización presentado en clase

En clase normalizamos varias tablas paso a paso. Por ejemplo, en la tabla de estudiantes la columna de cursos y la de notas tenían varios valores en una misma celda:

| cod | nom | email | cursos | nota |
| --- | --- | --- | --- | --- |
| 100111 | JOHN DOE | `DOE@USNA.EDU` | NN204, SI204, IT221 | 2, 3, 3 |
| 92244 | MATT SMITH | `SMITH@USNA.EDU` | SM223, EE301 | 4, 4 |
| 113221 | MELINDA BLACK | `BLACK@USNA.EDU` | SI204 | 3 |

Primero separé esos valores para que fueran atómicos, una fila por cada curso. Después, para eliminar los datos repetidos del estudiante, dividí la tabla en dos:

- **ESTUDIANTE** (<u>cod</u>, nom, email)
- **ESTUDIANTE_CURSO** (<u>cod</u>, <u>cursos</u>, nota)

Con la misma lógica trabajé la tabla de proyectos y empleados, donde el valor de la hora dependía de la profesión y no del empleado, y la tabla de visitas médicas.

<a class="button" href="/taller%20normalizacion.2.xlsx">Descargar taller (Excel)</a>

**Lo que aprendí:** Este taller realizado para presentar en clase me permitió entender las formas normales y sus transformaciones, que se hace en cada una y como se identifican. 

---

## Evidencia 2: Taller de entrega – Clínica y Tienda

En este taller normalizamos dos esquemas hasta la tercera forma normal y analizamos las dependencias encontradas en cada paso.

### Esquema 1: Clínica

**Tabla inicial:** CITA (ID_CITA, Fecha_Cita, Hora_Cita, Id_Paciente, Nombre_Paciente, Telefono_Paciente, ID_Doctor, Nombre_Doctor, Especialidad_Doctor, Consultorio_Asignado, Piso_Consultorio, Diagnostico, Tratamiento_Recomendado)

La tabla ya estaba en 1FN y, como su clave es simple (ID_CITA), no había dependencias parciales, así que también cumplía 2FN. Sin embargo, tenía dependencias transitivas: los datos del paciente dependían de Id_Paciente, los del doctor de ID_Doctor, el piso del consultorio y el tratamiento del diagnóstico. Para llevarla a 3FN separamos esas dependencias en tablas propias.

**Esquema resultante (3FN):**

- **CITA_CLINICA** (<u>ID_CITA</u>, Fecha_Cita, Hora_Cita, *Id_Paciente*, *ID_Doctor*, *Consultorio_Asignado*, *Diagnostico*)
- **PACIENTE** (<u>ID_Paciente</u>, Nombre_Paciente, Telefono_Paciente)
- **DOCTOR** (<u>ID_Doctor</u>, Nombre_Doctor, Especialidad_Doctor)
- **CONSULTORIO** (<u>Consultorio_Asignado</u>, Piso_Consultorio)
- **DIAGNOSTICO** (<u>Diagnostico</u>, Tratamiento_Recomendado)

### Esquema 2: Tienda

**Tabla inicial:** VENTA (ID_Venta, Fecha_Venta, ID_Sucursal, Nombre_Sucursal, Ciudad_Sucursal, ID_Producto, Nombre_Producto, Categoría_Producto, Precio_Unitario, Cantidad_Vendida, ID_Vendedor, Nombre_Vendedor, Comisión_Vendedor)

Aquí la clave era compuesta (ID_Venta, ID_Producto), así que sí había dependencias parciales: los datos de la venta dependían solo de ID_Venta y los del producto solo de ID_Producto. Al llevarla a 2FN separamos Venta, Producto y Detalle_Venta. Luego, para llegar a 3FN, quitamos de Venta las dependencias transitivas de la sucursal y del vendedor.

**Esquema resultante (3FN):**

- **VENTA** (<u>ID_Venta</u>, Fecha_Venta, *ID_Sucursal*, *ID_Vendedor*)
- **DETALLE_VENTA** (<u>*ID_Venta*</u>, <u>*ID_Producto*</u>, Cantidad_Vendida)
- **PRODUCTO** (<u>ID_Producto</u>, Nombre_Producto, Categoría_Producto, Precio_Unitario)
- **SUCURSAL** (<u>ID_Sucursal</u>, Nombre_Sucursal, Ciudad_Sucursal)
- **VENDEDOR** (<u>ID_Vendedor</u>, Nombre_Vendedor, Comisión_Vendedor)

Los atributos <u>subrayados</u> son claves primarias y los que están en *cursiva* son claves foráneas.

### Resumen comparativo

| Categoría | Esquema 1: Clínica | Esquema 2: Tienda |
| --- | --- | --- |
| Clave primaria inicial | Simple (ID_CITA) | Compuesta (ID_Venta + ID_Producto) |
| Forma normal inicial | 1FN | 1FN |
| Forma normal final | 3FN | 3FN (cumple también BCNF) |
| Dependencias parciales | 0 | 10 |
| Dependencias transitivas | 4 | 4 |
| Tablas resultantes | 5 | 5 |

Una conclusión importante del taller: en el esquema normalizado las consultas pueden necesitar cruzar varias tablas, pero las actualizaciones son más sencillas y seguras. Por ejemplo, cambiar la comisión de un vendedor ahora se hace en una sola fila y no en todas las ventas donde aparecía.

<a class="button" href="/TALLER_ENTREGA_BASES.xlsx">Descargar taller (Excel)</a>

**Lo que aprendí:** Este taller me ayudó con la identificación de las dependencias funcionales, las claves primerias y foráneas. 

---
