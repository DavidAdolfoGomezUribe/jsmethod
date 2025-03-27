var salones = ["a","b","c"]

salones.push("d")//push , añade el elemtno al final

salones.unshift("1")// pone el elemtno al comienzo

console.log(salones)

salones.shift()//elmina el primer elemento

salones.pop()//elimina el ultimo elemento 

salones.indexOf("b")//retorna la ubicacion del elemento

salones.splice(1,2,"asdf", "zz")//splice(elimino desde, elimnino hasta, añade esto "asdf")

var salones2 = salones.slice(1,4)//para hacer un subgrupo

var salones3 = salones.join("") //para unir todos los elementos y unirlos en estte caso con nada

salones.sort()
console.log(salones)
salones.sort().reverse()
console.log(salones)


//map

//usar set par conjuntos "set()" . sirve para eliminar duplicados de un array

salones.forEach(element => {
  console.log(element)
});


salones.map(element => {
  return element + ":)"
})

console.log(salones)

salones.filter(element => {
  return element.startsWith("a")
})

console.log(salones)

