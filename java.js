const iva = 1.21
const descuentoGAS = 0.85
let precio = 0
let demora = 0
let total = 0
let cantPileta = 0
let impPileta = 0
let continuar = true
let pileta 
let preguntaContinuar

function PedirMonto (){
    precio = parseFloat(prompt("Ingrese el monto de su consumo"))
    demora = parseFloat(prompt("Ingrese la cantidad de dias que pasaron despues de la fecha de vencimiento"))
}

function MensajeImpuesto (){
    alert("Usted debe abonar un total de $" + total)
}

function PREGUNTAR (){
    preguntaContinuar = prompt("Desea continuar? si/no")
    if (preguntaContinuar.toLowerCase() == "si"){
        continuar = true
    } else {
        continuar = false
        alert("Que tenga un buen dia!")
    }
}




function LUZ(){
    alert("La Luz tiene un costo del 1% mas por dia despues de su fecha de vencimiento, mas un 21% de IVA")
    PedirMonto ()
    total = precio *((demora/100)+1) * 1.21
    MensajeImpuesto ()
    PREGUNTAR ()
}

function AGUA(){
    alert("Si la boleta de agua esta vencida se abona un 2% mas por dia desde la fecha de su vencimiento + IVA + el IPFS \"Impuesto Piletita Feliz Solidario\" de $500 por pileta, en caso de que usted posea alguna")
    PedirMonto ()
    pileta = (prompt("Usted tiene pileta para darse unos richos chapusones? si/no"))
    if (pileta.toLowerCase() == "si"){
        impPileta = 500
        cantPileta = parseFloat(prompt("Cuantas piletas posee?"))
    } else {
        alert ("Espero que no nos mienta!, pasaremos con un helicoptero por encima de su casa para verificar")
    }
    total = precio *((demora*2/100)+1) * 1.21 + impPileta*cantPileta
    MensajeImpuesto ()
    PREGUNTAR ()
}

function GAS () {
    alert("Si la boleta de Gas esta vencida se abona un 1.5% mas por dia desde la fecha de su vencimiento, no se paga IVA y ademas le hacemos un 15% de descuento para asegurarnos tu voto en las proximas elecciones ")
    PedirMonto ()
    total = precio * ((demora*1.5/100)+1) * descuentoGAS
    MensajeImpuesto ()
    PREGUNTAR ()
}

alert ("Bienvenido al calculador de impuestos")

while (continuar == true){
let impuesto = parseFloat(prompt("Seleccion el servicio: \n 1 - Luz \n 2 - Agua \n 3 - Gas \n 4 - Salir"))

switch(impuesto){
    case 1:
        LUZ ()
        break

    case 2: 
        AGUA ()
        break

    case 3:
        GAS ()
        break

    case 4:
        alert("Que tenga un buen dia!")
        continuar = false
        break
        
    default:
        alert("Por favor, seleccione una opcion")
}
}

// Primera pre entrega final , realizado por Sebastian Leque
