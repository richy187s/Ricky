window.onload = function () {

      var imagenes=document.getElementById("imagenes");
      
      
          for (let i = 1; i < 11; i++) {
            var boton=document.createElement("button");
            // boton.setAttribute("class",`btn btn-light" ` + `style="border:0`);
            boton.setAttribute("style","border:0");
            var img =document.createElement("img");
            img.src=`JUEGOS/${i}.jpg`;
            img.setAttribute("class",`img-fluid ` + `alt="Responsive image`);
            imagenes.appendChild(boton);
            boton.appendChild(img);
      }

      


}
