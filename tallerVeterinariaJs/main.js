// # Taller veterinaria - JavaScript

// Implementar una aplicación en **JavaScript** que permita gestionar una veterinaria.

// ### **Requisitos:**

// 1. Las mascotas deben tener almenos las siguientes propiedades:
//     - Nombre
//     - Especie (Perro, Gato, etc.)
//     - Edad
//     - Peso
//     - Estado de salud (Sano, Enfermo, En tratamiento)
// 2. **Implementar un menú interactivo con `prompt` y `alert`** que permita al usuario:
//     1. Registrar una nueva mascota.
//     2. Listar todas las mascotas registradas.
//     3. Buscar una mascota por nombre.
//     4. Actualizar el estado de salud de una mascota.
//     5. Eliminar una mascota por nombre.
//     6. Salir del programa.

console.log("All ok")

document.addEventListener("DOMContentLoaded", ()=>{

    console.log("In document all ok")

    const register = document.querySelector(".register")

    
    
    //object
    
    let Animals = {
        nombre : "value",
        especie: ["valueOne","valueTwo"],
        edad : 0,
        peso: 0,
        estadodesalud : ["valueOne","valueTwo","valueTwo"]
    }


    register.addEventListener("click",()=>{
        alert("Por favor registre los datos del animal")
        console.log("register was clicket")

        let name = prompt("Ingrese el nombre n/")
        Animals.nombre = name
        
        let spcies = prompt("Ingrese la especie")
        Animals.especie = spcies


        console.log(Animals)



    })




    


    // let awnser = prompt("write something")

    
    


})