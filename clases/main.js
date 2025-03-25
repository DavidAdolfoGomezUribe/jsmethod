let gato = {
    npatas:4,
    nombre: "pepe",
    dueño:{nombre:"asdf",telefono:1324,saludar: function(){console.log("wenas")}},
    habitos:["atacar","dormir","correr"],
    nombre:"chayytaner",
    caminar: function(){
        console.log("meaow walking")
    },
    presentar: function(){
        console.log("meaow" + this.nombre)
    }

}

gato.caminar()
gato.presentar()
gato.nuevafun = function(){
    console.log("roarw")
}
//desestructurar

var {npatas} = gato
var { nombre : newNombre} = gato
var { color : colorpordefecto =  "blanco"} = gato

var {dueño:{nombre = "pedroperez"}} = gato

console.log(npatas)
console.log(newNombre)
console.log(colorpordefecto)
console.log(nombre)


console.log(gato)

JSON.stringify(gato)

function conocergato({nombre,npatas}){
    console.log("el gato" +  nombre +"y  tiene " +npatas +"patas")
}

conocergato(gato)




//nwe function

const objeto = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
    telefono: "123456789"
  };
  
  // Función replacer que omite la propiedad "telefono"
  const replacer = (key, value) => {
    if (key === "telefono") {
      return "987654321"; // Omitir "telefono"
    }// apuntar a un valor en especifico

    return value; // Devolver todos los demás valores
  };




  
  
  const perro = JSON.stringify(objeto, replacer, 4);//(objeto/reemplazar un valor especificao apuntando a un valor ,indentado
  console.log(typeof(perro));

  


  const reviver = (key, value) => {
    if (key === "telefono") {
      return "1234"; // Omitir "telefono"
    }// apuntar a un valor en especifico

    return value; // Devolver todos los demás valores
  };

  const newObjeto = JSON.parse(perro,reviver)
  console.log(newObjeto)

  
  //usar delete 



  let gato2 = { 
    peso: 5,
    vidas : 7,
    anios : 59

  }

console.log()  

  let gato3 = {
    ...gato,
    ...gato2,
    peces:2

  }


  console.log(gato3)
//clonar

let gato4 = {...gato}