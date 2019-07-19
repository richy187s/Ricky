

var izquierda = document.getElementById("buttonizquierda").addEventListener("click", mifuncion);
var derecha = document.getElementById("buttonderecha").addEventListener("click", mifuncion1);
var arriba = document.getElementById("buttonarriba").addEventListener("click", mifuncion2);
var abajo = document.getElementById("buttonabajo").addEventListener("click", mifuncion3);
// var parar = document.getElementById("buttonparar").addEventListener("click", funparar);
// var iniciar = document.getElementById("buttoniniciar").addEventListener("click", funiniciar);
var punto = document.getElementById("div")

    var mivar=10;

    function mifuncion() {
        var valor = punto.offsetLeft;
        console.log(punto.style.left = mivar + valor + "px");
    }

    function mifuncion1() {
        var valor = punto.offsetLeft;
        console.log(punto.style.left = valor- mivar + "px");
    }

    function mifuncion2() {
        var valor = punto.offsetTop;
        console.log(punto.style.top = valor - mivar + "px");
    }

    function mifuncion3() {
        var valor = punto.offsetTop;
        console.log(punto.style.top = valor + mivar + "px");
    }

    //----------------------------------------------------------------------
        //cuando click se mueve con un punto
    // function mostrarposicion(evento) {
        //     var x=evento.clientX;
        //     var y=evento.clientY;
        //     console.log("evento x "+ x);
        //     console.log("evento y "+ y);

        //     console.log(punto.style.top = y-25 + "px");
        //     console.log(punto.style.left = x-25 + "px");

        //     console.log( "Posicion: "+ evento.clientX + "/" + evento.clientY);
        // }
        //  console.log(window.addEventListener("click",mostrarposicion));

        //---------------------------------------------------------------
        // mover el cursos con un circulo
        // window.onmousemove = function (){
        //     var x = window.event.clientX;
        //     var y = window.event.clientY;
        //     console.log(punto.style.top = y-25 + "px");
        //     console.log(punto.style.left = x-25 + "px");
        //     console.log("eje x: "+ x + " eje y: " + y);
        //}





