//1. Número interesante
//Escribe una función que determine si un número entero positivo n es "interesante". Un número es interesante si es múltiplo de 7 o contiene un 7 en sus dígitos.
//Ejemplo:
//console.log(esInteresante(71)); // true (contiene un 7)
//console.log(esInteresante(49)); // true (es múltiplo de 7)
//console.log(esInteresante(23)); // false

console.log("wenas ok")

 

function esInteresante(n) {
    
    let nString = n.toString()
    
    for (let i = 0; i < nString.length; i++) {
        

        if (n % 7 === 0 || 7 == nString.charAt(i) ) {
            return  console.log("interesante")
        } else {
            return  console.log("no interesante")
        }

    }
    
    
    
}

console.log(esInteresante(71)); // true (contiene un 7)
console.log(esInteresante(49)); // true (es múltiplo de 7)
console.log(esInteresante(23)); // false
console.log("sigiente ejercicio"); 

//2. Rango de números primos
//Crea una función que reciba dos números a y b y retorne un array (también podría implementarse sin array) 
//con todos los números primos en ese rango (incluyendo a y b si son primos)
//console.log(primosEnRango(10, 20)); // [11, 13, 17, 19]

function primosEnRango(a, b) {
    
    
    let primos = [];
    for (let i = Math.max(2, a); i <= b; i++) {
        if (esPrimo(i)) primos.push(i);
    }
    return primos;
    
    
    function esPrimo(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
}
console.log(primosEnRango(10,20))

console.log("sigiente ejercicio"); 

// ### **3. Secuencia de Collatz**

// La **secuencia de Collatz** se genera de la siguiente forma:

// - Si **n** es par, el siguiente número es **n / 2**.
// - Si **n** es impar, el siguiente número es **3n + 1**.
// - Se repite este proceso hasta llegar a 1.Escribe una función que reciba un número 
// y devuelva la cantidad de pasos necesarios para llegar a 1.**Ejemplo:**

function collatz (n){
    
    let steps = 0

    while (n !== 1){

        if (n % 2 == 0) {
            n = n/2
        } else {
            n = (3*n )+ 1
        }
        steps ++;
    }
return steps
}




console.log(collatz(6)); // 8 (6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1)
console.log("sigiente ejercicio"); 


// 4. Palíndromo sin espacios ni signos
// Crea una función que reciba una cadena y determine si es un palíndromo,
//  ignorando espacios, mayúsculas, minúsculas y signos de puntuación.
// Ejemplo
// console.log(esPalindromo("Anita lava la tina")); // true
// console.log(esPalindromo("¿Acaso hubo búhos acá?")); // true


function esPalindromo(str) {
    let newStr = str
        .toLowerCase()
        .normalize("NFD") // Descompone los caracteres con tilde
        .replace(/[\u0300-\u036f]/g, "") // Elimina las tildes
        .replace(/[^a-z0-9]/g, ""); // Filtra solo letras y números
    
    let reverseStr = newStr.split("").reverse().join(""); // Invierte el string

    return newStr === reverseStr; // Retorna true o false
}

console.log(esPalindromo("¿Acaso hubo búhos acá?"))
console.log("sigiente ejercicio"); 


// 5. Mayor producto de pares consecutivos
// Dado un array de enteros positivos, encuentra el mayor producto entre 
// dos números consecutivos que sean pares.
// Ejemplo:
// console.log(mayorProductoPar([3, 6, 2, 9, 10, 4])); // 20 (10 * 2)

function mayorProductoPar(arr) {
    let maxProducto = -1; // Iniciamos con un valor negativo para manejar el caso sin pares consecutivos

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) { // Verificamos si ambos son pares
            let producto = arr[i] * arr[i + 1]; // Calculamos el producto
            maxProducto = Math.max(maxProducto, producto); // Guardamos el mayor producto encontrado
        }
    }

    return maxProducto; // Retorna -1 si no hay pares consecutivos
}

// Ejemplo de uso
console.log(mayorProductoPar([3, 6, 2, 9, 10, 4])); // 20 (10 * 2)
console.log("sigiente ejercicio"); 





  
