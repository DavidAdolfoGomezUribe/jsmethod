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
        },4000)
        

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

            
        },6000)
        
    })
}

function encenderLuces(marca){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("se encienden las luces de " + marca)
            resolve("ok")    
        })
        
    },8000)
    
}


abriVehiculo("Mazda").then((encendervehiculo)).then(encenderLuces).then(function go() {
    console.log("go");
})
.catch(function(error){
    console.log(error)
}

).finally( function () {
    console.log("apor enpanadaas")
    
}
)

// abriVehiculo("toyota",function(marca){
//   encendervehiculo(marca,function () {
//     encenderLuces(marca, function () {

//         setTimeout(function () { console.log("all ok")},10000)
//         })
//     })  
// })