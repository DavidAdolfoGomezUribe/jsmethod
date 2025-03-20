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

function primosEnRango(a,b) {
    for (let i = a; i <= b; i++) {
        var c = []
        if (i > 1 && !(i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0)) {
            c.push(i);
        } else if (i === 2 || i === 3 || i === 5 || i === 7) {
            c.push(i);
        }else {
        }
        
        console.log(c);
    }
}

console.log(primosEnRango(10,20))

console.log("sigiente ejercicio"); 


//3. Secuencia de Collatz
//La secuencia de Collatz se genera de la siguiente forma:
//Si n es par, el siguiente número es n / 2. b 

function Collatz (n){

    for (let i = 0; i < array.length; i++) {
        
    }

    if (n % 2 === 0) {
        
    } else {
        
    }

}