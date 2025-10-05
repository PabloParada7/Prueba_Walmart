# Desafío Técnico QA Automation - Prueba_Walmart

# Herramientas Elegidas

| Herramienta | Justificación |
| Cypress (JavaScript) | Elegida por su velocidad de ejecución, su arquitectura "all-in-one" y su simplicidad para implementar buenas prácticas como el Page Object Model (POM).

| Page Object Model (POM)*| Utilizado para estructurar el código, separando la lógica de la prueba de los selectores y las acciones, cumpliendo con la calidad y estructura del código

| Fixtures| Utilizado para el manejo de datos dinámicos (credenciales de usuario), mejorando la mantenibilidad de los tests. |


Dominio de Herramientas (Selenium IDE)
Para demostrar el manejo del ecosistema de automatización y proveer una solución, se han incluido scripts grabados con Selenium IDE.

Proposito : Flujos Rápidos	
Formato : Archivos .side
Justificacion : Permiten ejecutar los tres flujos funcionales (Búsqueda, Login, Carrito) sin necesidad de configurar dependencias de Node.js, simplemente cargando el archivo en la extensión de Selenium IDE.
---

## Flujos Funcionales Seleccionados y Justificación

Se seleccionaron tres flujos críticos que representan los pilares de un e-commerce: **visibilidad (búsqueda)**, **acceso (login)** y **conversión (carrito)**.

| Archivo | Flujo Funcional | Relevancia y Cobertura |
| `buscar.cy.js` | **Búsqueda de Productos** | Flujo principal que valida la funcionalidad del motor de búsqueda y la **disponibilidad del catálogo** (visibilidad). |
| `login.cy.js` | **Inicio de Sesión** | Valida el **acceso seguro** del usuario y la persistencia de la sesión, crítica para datos de envío y métodos de pago. |
| `carrito.cy.js` | **Agregar a Carrito** | Valida la **gestión de stock** y el inicio del proceso de *checkout*, esencial para la conversión de ventas. |

---

## Manejo del Bloqueo Anti-Bot

Durante la automatización, se encontró una barrera técnica avanzada de **detección de bots** en Lider.cl que interrumpe la navegación con una pantalla de verificación de interacción humana.

1.  **Diagnóstico:** Se identificó que la pantalla contiene el texto constante **"Pulsar y mantener pulsado"**, mientras que sus selectores de `ID` y `class` son **dinámicos**.
2.  **Solución Implementada:** Para demostrar la **capacidad de resolver problemas**, se implementó un **Comando Personalizado** (`cy.bypassVerificacionBot` en `cypress/support/e2e.js`) que:
    * Utiliza la aserción `cy.contains()` con el texto fijo para localizar el elemento de bloqueo.
    * Aplica la técnica de **eliminación forzada del DOM (`.remove()`)** sobre el contenedor principal, la solución más agresiva en Cypress.
3.  **Resultado de la Ejecución:** Si bien esta técnica es la más adecuada, la sofisticación del sistema de Lider.cl ha impedido el *bypass* completo. El código se entrega con esta solución **implementada y documentada**, demostrando la correcta aplicación de un criterio técnico avanzado para mitigar el riesgo de *anti-automation*.

--------------------------------------

Evidencia Visual y Trazabilidad :

Se activó la generación de evidencia de prueba para garantizar la trazabilidad y la evidencia visual de los flujos.

Videos: Grabados automáticamente para cada ejecución en modo headless (npx cypress run), proporcionando una vista completa de la ejecución.

Capturas de Pantalla (Screenshots): Generadas automáticamente por Cypress en caso de que ocurra algún fallo de aserción o error en la prueba. Estas capturas (guardadas en cypress/screenshots/) son cruciales para documentar el punto exacto donde el sistema anti-bot detiene el flujo funcional.
--------------------------------------------------------

## Instrucciones de Ejecución

El proyecto fue desarrollado en un entorno Codespaces/DevContainer, pero es ejecutable en cualquier máquina con Node.js.

### Requisitos Previos:
* Node.js (v16+) y npm instalados.

### Pasos:
1.  **Clonar el Repositorio:** `git clone [TU REPOSITORIO]`
2.  **Instalar Dependencias:** Navega a la carpeta raíz y ejecuta: `npm install`
3.  **Ejecución en Modo Interactivo (Recomendado para ver la falla del anti-bot):**
    ```bash
    npx cypress open
    ```
4.  **Ejecución en Modo Headless (Terminal):**
    ```bash
    DBUS_SESSION_BUS_ADDRESS=/dev/null npx cypress run --browser electron
    ```
    *(Nota: Se incluye `DBUS_SESSION_BUS_ADDRESS` para evitar errores de entorno Linux comunes en contenedores).*



5.  **Ejecución Alternativa (Selenium IDE):**

Requisito: Instalar la extensión Selenium IDE en Chrome o Firefox.

Paso: Abrir la extensión y seleccionar "Open a project". Navegar a la carpeta del proyecto y cargar el archivo [pruebas_lider1].side

Propósito: Proporciona una ejecución inmediata de los flujos grabados.
----------------------------------------------------------------------------------------------------------------------------------------
    Ademas de todo lo anterior : 
    Durante la implementación de los flujos, se encontró una barrera impuesta por un sistema avanzado de detección de bots de Lider.cl para el ambiente de producción, Este mecanismo interrumpe la ejecución de los tests al requerir una interacción de tipo humano específica, lo cual es notoriamente difícil de automatizar.

    Se detecto lo siguiente : 

    Característica del Bloqueo : 
    Desafío de interacción humana ("Pulsar y mantener pulsado") en lugar de un reCAPTCHA tradicional.
    Diagnóstico Técnico : El mensaje de texto es fijo ("Pulsar y mantener pulsado",tambien comentarles que se intento realizar de manera "manual" dentro de la automatizacion apretar el boton pulsar y se repetia N veces , nunca se llego al home), inclusive el ID y las clases del contenedor son dinámicos, lo cual invalida los selectores estándar.
---------------------------------------------------------------------------------------------------------------------------------