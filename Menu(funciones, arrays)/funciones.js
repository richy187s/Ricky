

function menu() {
    alert("escoja su eleccion \n 1: rojo \n 2: amarillo \n 3: violeta");
}

menu();
var a = [];
for (i = 0; i < 3; i++) {

    var op = +prompt("ingrese su opcion");
    if (op<=3) {
        
    switch (op) {
        case 1:
            var valor = 4;
            alert("el color que escogio es rojo ")
            break;
        case 2:
            var valor = 5;
            alert("el color que escogio es amarillo ")
            break;
        case 3:
            var valor = 7;
            alert("el color que escogio es violeta ")
            break;
    }
    a[i] = valor;
    
}else{
 
alert("no es un opcion permitida");
window.alert("es una prueba");
break;

}
alert("tu resistencia es de " + a);

}
