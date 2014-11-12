---

# FUNCIONES

Una función es un bloque de código que puede recibir un input y devolver un output.

Vamos a utilizar la palabra reservada `return` para especificar lo que devuelve una funcioón.


Por ejemplo
```js
function ejemplo (x) {
  return x * 2;
}
```

Podemos **llamar** a la función de esta forma para obtener el número 10:

```js
console.log(ejemplo(5))
```

El ejemplo anterior asume que la función `ejemplo` recibirá un número cómo argumento –– input –– y retornará el número multiplicado por 2.
The above example assumes that the `example` function will take a number as an argument –– as input –– and will return that number multiplied by 2.

## El ejercicio:

Crea una archivo llamando funciones.js

En ese archivo, define una función llamada `comer` que reciba un argumento llamado `fruta` que será una string.
In that file, define a function named `eat` that takes an argument named `food`  
that is expected to be a string.

Dentro de la función, retorna el argumento `food` de la siguiente manera:

```js
return 'las ' + fruta + ' son ricas.';
```

Dentro de los parentesis de `console.log()`, llama a la función `eat()` con la string `bananas` cómo argumento.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

`javascripting verify funciones.js` 

---
