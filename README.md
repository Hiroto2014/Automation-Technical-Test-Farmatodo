# QA Automation - Prueba Técnica Farmatodo

Este proyecto contiene la implementación completa de una prueba técnica de automatización utilizando **Playwright con TypeScript**, enfocada en:

- Pruebas de integración contra una API pública (PokéAPI)
- Pruebas End-to-End (E2E) sobre una aplicación web de pruebas (SauceDemo)
- Ejecución multi-navegador
- Buenas prácticas de automatización

El objetivo principal es demostrar habilidades en automatización, arquitectura de pruebas, manejo de APIs, validaciones E2E y toma de decisiones técnicas.


---

## Tecnologías utilizadas

- Node.js
- Playwright
- TypeScript
- Dotenv
- PokéAPI (API pública)
- SauceDemo (sitio de pruebas E2E)

---

## Instalación

```bash
npm install
npx playwright install
npm install dotenv
```

## Variables de entorno

El proyecto utiliza dotenv para manejar configuraciones sensibles y de entorno.

Crear un archivo `.env` en la raíz con:

```bash
POKE_API_URL=https://pokeapi.co/api/v2

URL_PAGE = https://www.saucedemo.com
USER_NAME = standard_user
PASSWORD = secret_sauce
PRODUCTO_NAME = Sauce Labs Fleece Jacket
```

## Descripción general de las pruebas

### Prueba de Integración – PokéAPI

Esta prueba valida el consumo correcto de múltiples endpoints de la PokéAPI para obtener la cadena evolutiva del Pokémon **Squirtle**.

#### Flujo general:

1. Se consulta el endpoint `/pokemon/squirtle`
2. Se obtiene la URL de la especie
3. Desde la especie se obtiene la URL de la cadena de evolución
4. Se recorren las evoluciones (Para este caso, Squirtle → Wartortle → Blastoise)
5. Para cada Pokémon se consulta su peso individual
6. Se construye una lista de objetos con las varialbes de Nombre (_name_) y Peso (_weight_)
7. La lista se ordena alfabéticamente utilizando un algoritmo personalizado (Merge Sort)
8. Se imprimen los resultados por consola

### Prueba de End-to-End – SauceDemo

Esta prueba automatiza un flujo completo de compra dentro del sitio de pruebas https://www.saucedemo.com

Flujo general:

1. Acceso al sitio
2. Login con credenciales proporcionadas
3. Localización del producto Sauce Labs Fleece Jacket
4. Captura del nombre y precio del producto
5. Adición del producto al carrito
6. Validación de que el nombre y precio coinciden con los valores previamente capturados
7. Proceso de checkout completo
8. Validación de confirmación de compra

## Datos Tecnicos

### Ejecución multi-navegador
Las pruebas están configuradas para ejecutarse automáticamente en:
- Chromium (Chrome)
- Firefox
- WebKit (Safari)

Esto permite validar compatibilidad cross-browser.

### Reportes
Se genera automáticamente un reporte HTML con:
- Resultados de ejecución
- Evidencias
- Trazas en caso de fallo


## Correr Pruebas

Correr todo el archivo de Pruebas

```bash
npx playwright test
```

Correr unicamente la Automatización de Integración de la PokéAPI
```bash
npx playwright test tests/test_integration_API
```

Correr unicamente la Automatización E2E de Sauce Demo
```bash
npx playwright test tests/test_integration_API
```
Modo visual:
```bash
npx playwright test --headed
```

Ver Reporte HTML de la Ejecución de las Pruebas Automatizadas
```bash
npx playwright show-report
```
 