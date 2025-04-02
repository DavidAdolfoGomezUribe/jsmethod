
document.addEventListener("DOMContentLoaded", async function () {
    console.log("ok");
    const method = "GET";
    const urlb = "https://swapi.dev/api/"
    const headers = new Headers();
    headers.set("Content-Type", "application/json")
    var settigns = {
        method: method,
        headers: headers
    }

    // const peticion = new XMLHttpRequest();
    // peticion.open(method,urlb+"people");
    // peticion.setRequestHeader("Content-Type","application/json");

    // peticion.onload = function(){
    //     console.log(JSON.parse(peticion.responseText))
    // }


    // peticion.send()

    //fetch
    // fetch(urlb+"people",settigns).then((response)=>{
    //     return response.json();
    //   }).then((datos)=>{
    //     console.log(datos)
    //   }).catch(((error)=>{
    //     console.log(error);

    //   }));

    const respuesta = await fetch(urlb + "people",settigns);
    const datos = await respuesta.json();
    console.log(datos)
    
    
    
    })