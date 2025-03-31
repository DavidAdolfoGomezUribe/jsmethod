console.log("ok")

function abriVehiculo(marca){

    return new Promise((resolve, reject) => {
        
        setTimeout(function(){
            if (marca === "Mazda") {
                console.log("...abrir vehiculo " + marca)
                resolve(marca)
            } else {
                console.log("...no abrir vehiculo " + marca)
                reject("error al abrir")
            }
        },3000)
        

    })


}

function encendervehiculo(marca){
    return new Promise((resolve, reject) => {
        setTimeout(function(){

            if (marca === "Mazda" ) {
                console.log("...encender vehiculo " + marca)
                resolve(marca)
            } else {
                
                console.log("...no abrir vehiculo " + marca)
                reject("erro al encencer vehiculo")
            }

            
        },4000)
        
    })
}

function encenderLuces(marca){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("se encienden las luces de " + marca)
            resolve("ok")    
        })
        
    },5000)
    
}


// abriVehiculo("Mazda").then((encendervehiculo)).then(encenderLuces).then(function go() {
//     console.log("go");
// })
// .catch(function(error){
//     console.log(error)
// }

// ).finally( function () {
//     console.log("apor enpanadaas")
    
// }
// )




async function ponerEnMarcha(marca) {
    try {
        
        var marca1 = await abriVehiculo(marca)
        var marca2 = await encendervehiculo(marca1)
        await encenderLuces(marca2).then(()=>{
            console.log("arrancar")

        })
    } catch (error) {
        console.log(error);    
    }
}

ponerEnMarcha("Mazda")