

    var izquierda = document.getElementById("buttonizquierda").addEventListener("click", mifuncion);
    var derecha = document.getElementById("buttonderecha").addEventListener("click", mifuncion1);
    var arriba = document.getElementById("buttonarriba").addEventListener("click", mifuncion2);
    var abajo = document.getElementById("buttonabajo").addEventListener("click", mifuncion3);
    //var parar = document.getElementById("buttonparar").addEventListener("click", funparar);
    // var iniciar = document.getElementById("buttoniniciar").addEventListener("click", funiniciar);
    var punto = document.getElementById("div")
    
    var mivar=1;

    function mifuncion() {
        punto.style.backgroundColor = "blue";
        var valor = punto.offsetLeft;
        console.log(punto.style.left = mivar + valor + "px");
    }

    function mifuncion1() {
        punto.style.backgroundColor = "yellow";
        var valor = punto.offsetLeft;
        console.log(punto.style.left = valor- mivar + "px");

        
    }
    function mifuncion2() {
        punto.style.backgroundColor = "green";
        var valor = punto.offsetTop;
        console.log(punto.style.top = valor - mivar + "px");
        
    }
    function mifuncion3() {
        punto.style.backgroundColor = "pink";
        var valor = punto.offsetTop;
        console.log(punto.style.top = valor + mivar + "px");

        
    }







