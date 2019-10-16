window.onload = inicializar;
var fichero;
var storageRef;
var imagenesFBRef;

function inicializar() {
    fichero = document.getElementById("fichero");
    fichero.addEventListener("change", subirImagenAFirebase, false);

    storageRef = firebase.storage().ref();

    imagenesFBRef = firebase.database().ref().child("imagenesFB");

    mostrarImagenesDeFirebase();

}

function mostrarImagenesDeFirebase() {
    imagenesFBRef.on("value", function (snapshot) {
        var datos = snapshot.val();
        var result = "";
        for (var key in datos) {
            result += '<img width="200" class="img-thumbnail" src="' + datos[key].url + '"/>';
            console.log(result);

        }
        document.getElementById("imagenes-de-firebase").innerHTML = result;
    })
}

function subirImagenAFirebase() {
    var imagenASubir = fichero.files[0];

    var uploadTask = storageRef.child('imagenes/' + imagenASubir.name).put(imagenASubir);

    document.getElementById("progreso").className = "";


    uploadTask.on('state_changed',
        function (snapshot) {

            var barraProgreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById("barra-de-progreso").style.width=barraProgreso + "%";

        }, function (error) {

            alert("hubo un error");
        }, function () {

            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('imagen subido a', downloadURL);
                crearNodoEnBDFirebase(imagenASubir.name, downloadURL);
                document.getElementById("progreso").className = "invisible";
            });

        });
}

function crearNodoEnBDFirebase(nombreImagen, downloadURL) {
    imagenesFBRef.push({ nombre: nombreImagen, url: downloadURL });
}