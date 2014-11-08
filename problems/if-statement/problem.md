---

# BLOQUE CONDICIONAL

Los bloques condicionales son utilizados, partiendo de una condición booleana específica, alterar el control de flujo de un programa.
Conditional statements are used to, based in a specified boolean condition, alter the control flow of a program.

Un bloque condicional se parece a lo siguiente:
A conditional statement look like this:

```js
if(n > 1) {
  console.log('the variable n is greater than 1.');
} else {
  console.log('the variable n is less or equal than 1.');
}
```

Dentro de los paréntesis debes ingresar una sentencia lógica, significa que deberá ser verdadera (true) o falsa (false).

El *else* block es opcional y contiene el código que será ejecutado si la sentencia lógica dentro de los paréntesis es falsa.

## El ejercicio

Crea un archivo llamando `if-statement.js`

En ese archivo, declara una variabe llamada `fruta`.

Haz la variable `fruta` referenciar al valor **naranja**

Luego utiliza `console.log()` para imprimir a la terminal **La cantidad de caracteres del nombre de la fruta es mayor a cinco.** si el length de la variable `fruta` es mayor a cinco.
Imprime **La cantidad de caracteres del nombre de la fruta es menor o igual a cinco.**

Comprueba si tu programa funciona correctamente ejecutando el siguiente comando:

`javascripting verify if-statement.js`

---
