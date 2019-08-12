window.onload= function () {
    var body =document.getElementById("body");
    
    var divcontainer=document.createElement("div");
    var divrow=document.createElement("div");
    var boton=document.getElementById("boton");
    
    
    divcontainer.setAttribute("class","container");
    divrow.setAttribute("class","row");

    
    body.appendChild(divcontainer);
    divcontainer.appendChild(divrow);
    ;
    

    function cargar(imagenes) {

        for (let i = 0; i < imagenes.length; i++) {
            
        var divcol=document.createElement("div");
        divcol.setAttribute("class","col-sm");
        divcol.style.width="50px";
        divcol.innerHTML=`<img src=${imagenes[i].imagen} class="img-thumbnail">`;
       
        divrow.appendChild(divcol);

        }
        
    }

    boton.onclick=function () {
        
        var xhr = new XMLHttpRequest();

        console.log(xhr);

        console.log("readyState",xhr.readyState);

        xhr.onreadystatechange = function () { 
                switch (xhr.readyState){
                    case 1:
                        console.log("se ha ejecutado la función open()");
                        break;
                    case 2:
                        console.log("se ha disparado una petición http");
                        break;
                    case 3:
                        console.log("ya estamos descargando los datos");
                        break;
                    case 4:
                        console.log("ya tenemos los datos, la operación terminó");
                        console.log("el codigo de estado es: " + xhr.status);
                        var json = JSON.parse(xhr.responseText);
                        console.log(xhr.responseText);
                        

                        console.log("el contenido de la solicitud es: ", json);
                        cargar(json);

                        break;
                    default:
                        console.log("Ha ocurrido un error inesperado");
                }
            }
            xhr.open("GET","http://5d4b6ade00dbb10014879b18.mockapi.io/imagenes");

            xhr.send(null);
    }
        
    



}