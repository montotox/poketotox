# Desarrollo de Pokedex - Mobile First

Librería creada para integrar la PokeAPI.

## Visitá la [DEMO](https://poketotox.netlify.app).

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

1. Ganas de aprender sobre el mundo Pokemon (Yo no sabía nada :laughing:)
2. Mirá el diseño de lo que quería hacer en [Figma](https://www.figma.com/file/BPrlyncIwYaeDUSQseZ5a3/PokeToToX?node-id=1%3A4)
3. Visitá la página de [PokeAPI](https://pokeapi.co) para saber cómo integrarla.

_Mirá este ejemplo de búsqueda paginada._

```
{
  "count": 1118,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=202&limit=2",
  "previous": "https://pokeapi.co/api/v2/pokemon?offset=198&limit=2",
  "results": [
    {
      "name": "unown",
      "url": "https://pokeapi.co/api/v2/pokemon/201/"
    },
    {
      "name": "wobbuffet",
      "url": "https://pokeapi.co/api/v2/pokemon/202/"
    }
  ]
}
```

### Instalación 🔧

1. Necesitas descargar la repo tu PC.

_Recordá descargarlo en la carpeta de tu proyecto._

```
$ git clone https://github.com/montotox/poketotox.git
```

2. Corré la app desde consola.

_Recuerda de instalar los paquetes de node_modules previamente ejecutando **npm install**._

## Ejecutando las pruebas ⚙️

Arrancá tu app con **npm start** y te enviará al navegador en http://localhost:3000.

_Tip: Si querés ver desde tu celular, dejá corriendo la app en tu PC y si estas en la misma red WIFI sólo necesitas saber la ip de tu PC, ingresá desde tu celu a esa IP (ejemplo. 198.162.1.4:3000)._

### Posibles problemas 🔩

_Chequea que el flujo de datos es correcto._

- Observá en consola qué errores aroja.
- Chequeá que tengas una versión actualizada de npm.

## Deployment 📦

_Chequeá que no tengas errores y luego ejecutá:_

```
npm run build
```

## Autores ✒️

- **Ricardo Coronel** - _Trabajo Inicial / Documentación_ - [montotox](https://github.com/montotox)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/montotox/poketotox/contributors) quíenes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia (GPL) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
- Da las gracias públicamente 🤓.
- Programamos con ❤️

---
