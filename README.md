# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### TDD

¿Qué es TDD?

Test Driven Development (Desarrollo guiado por pruebas)

Primero escribir las pruebas y luego ir refactorizando hasta tener las pruebas correctas.

CICLO:

1. Se escribe la prueba, se verifica que la prueba falla.
2. Desarrollar el código hasta que pasa satisfactoriamente.
3. Refactorizar el código hasta que queda el código limpio.

Próposito -> Crear un código limpio y a la vez funcional.

Los requisitos son traducidos en pruebas las pruebas pasan y garantizan que el software cumple con los requisitos que se establecieron.

Ejemplo:

Primero tener un requisito (Definir exactamente que es lo que tenemos que hacer)
Escribir prueba automatizada.
Verificar que la prueba falla, no hay código adaptado a la prueba.
Escribimos el código de la forma más sencilla para que la prueba de 'ok'.
---Principio 'KISS'

Keep it simple, stupid.
(Hazlo simple)---

Ejecutar las pruebas y verificar que estan correctas.
Refactorizar, eliminar código duplicado o inservible.

Test unitario -> prueban una unidad de código como por ejemplo un objeto o una función.

Test de integración -> prueban la interacción de más de un componente.

Test e2e -> Prueban todo el sistema funcionando.

### Proveedores de contexto ( Context.Provider )

### Currying

- Beneficios de la técnica

--> Mejor estructura de código.
--> Potente con Map.
--> Más reutilización de funciones.
--> Permite componer funciones.

Clousure ejemplo:

```javascript
// step 1
function start() {
  var name = "Name";
  function showName() {
    // Clousure o clausura
    alert(name);
  }
  showName();
}

function onClick(obj, e) {
  start();
}

document.getElementById("app").innerHTML = `
<h1>Clousure</h1>
<div>
    <button id="ok">Action</button>
</div>
`;

document.getElementById("ok").addEventListener("click", onClick);
```

```javascript
// step 2
function start() {
  var name = "Name";
  function showName() {
    // Clousure o clausura
    alert(name);
  }
  return showName;
}

let startFn;

function onClick(obj, e) {
   startFn = start();
}

function onClickEject(obj, e) {
    startFn();
}

document.getElementById("app").innerHTML = `
<h1>Clousure</h1>
<div>
    <button id="ok">Action</button>
    <button id="eject">Eject</button>
</div>
`;

document.getElementById("ok").addEventListener("click", onClick);
document.getElementById("eject").addEventListener("click", onClickEject);
```

```javascript
// step 3
function start(name) {
  function showName() {
    // Clousure o clausura
    alert(name);
  }
  return showName;
}

let startFn;

function onClick(obj, e) {
   startFn = start("Name");
}

function onClickEject(obj, e) {
    startFn();
}

document.getElementById("app").innerHTML = `
<h1>Clousure</h1>
<div>
    <button id="ok">Action</button>
    <button id="eject">Eject</button>
</div>
`;

document.getElementById("ok").addEventListener("click", onClick);
document.getElementById("eject").addEventListener("click", onClickEject);
```

Currying example

```javascript
// step 1
function createSum(x) {
    return function (y) {
        return x + y;
    }
}

var baseOne = createSum(1);

var baseFive = createSum(5);

console.log(baseOne(10)); // result: 11
console.log(baseFive(10)); // result: 15
```

```javascript
// step 2
function createSum(x) {
    return function (y) {
        console.log("x + y", x + y);
        return x + y;
    }
}

var baseOne = createSum(1);

var baseFive = createSum(5);

var array = [1, 2, 3, 4, 5];

array.map(n => baseOne(n)); // result: x + y -> 2, 3, 4, 5, 6
array.map(n => baseFive(n)); // result: x + y -> 6, 7, 8, 9, 10
```

```javascript
// step 3
function log(date) {
    return (priority) => (mensaje) => {
        console.log(
            `[${date.getHours()}:${date.getMinutes()}] [${priority}] ${mensaje}`
        );
    }
}

let logActual = log(new Date());

let logInformation = logActual("Information");
let logError = logActual("Error");

logInformation("This is a test"); // [17:30] [Information] This is a test
logError("Advanced course");  // [17:30] [Error] Advanced course
```

### API

[API](https://api.openweathermap.org/data/2.5/weather?q=London&appid=****)

## conceptos

React.memo

- Shallow compare o comparación superficial.

    La comparación superficial es cuando las propiedades de los objetos que se comparan se realizan utilizando "===" o igualdad estricta y no comparaciones más profundas en las propiedades.

Inspección exhaustiva

<https://es.reactjs.org/docs/profiler.html>
