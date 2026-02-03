# 🤖 QA Automation - Prueba Técnica Farmatodo

Proyecto de automatización desarrollado en Playwright con TypeScript.

En este repositorio se encuentra:

- Prueba de integración con PokéAPI  
- Prueba E2E completa en SauceDemo

---

## 🚀 Tecnologías

- Playwright
- TypeScript
- Node.js

---

## 📦 Instalación

```bash
npm install
npx playwright install
```

## Correr Pruebas

- Correr todo el archivo de Pruebas

```bash
npx playwright test
```

Correr todo el Unicamente la Automatización de Integración de la PokéAPI
```bash
npx playwright test tests/test_integration_API
```

Correr todo el Unicamente la Automatización E2E de Sauce Demo
```bash
npx playwright test tests/test_integration_API
```

Ver Reporte de Ejecución de Pruebas
```bash
npx playwright show-report
```
 