console.log("ok")

//setTimeout()//recibe 2 parametros, funcion a ejecutar y tiempo a ejecutarse

function procesoAsicrono(callback) {

    setTimeout(function(){
        console.log("ok")
        callback()
    },2000)
    
}


function procesoRespuestaOne() {
    console.log("2segs");
    
}

procesoAsicrono(procesoRespuestaOne)


function abriVehiculo(marca,callback){
    setTimeout(function(){
        console.log("...abrir vehiculo " + marca)
    },4000)
    callback(marca)
}

function encendervehiculo(marca,callback){
    setTimeout(function(){
        console.log("...encender vehiculo " + marca)
    },6000)
    callback()
}

function encenderLuces(marca,callback){
    setTimeout(function(){
        console.log("...encender lices " + marca)
    },8000)
    callback()
}


abriVehiculo("toyota",function(marca){
  encendervehiculo(marca,function () {
    encenderLuces(marca, function () {

        setTimeout(function () { console.log("all ok")},10000)
        })
    })  
})