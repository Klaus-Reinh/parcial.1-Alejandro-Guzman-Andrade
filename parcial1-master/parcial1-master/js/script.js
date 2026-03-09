function cambiarTexto() {

    document.getElementByID("descripcion").innerHTML = "Ahora estás viendo nuestras ofertas!"

}

function modoOscuro() {

    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"

}

let carrito = 0

function agregarCarrito() {

    carrito++
    console.log("Productos en carrito: " + carrito)

}

function enviarFormulario() {

    let nombre = document.getElementById("nombre").value;
    var  correo = document.getElementById("correo").value;
    var  apellido = document.getElementById("apellido").value;
    var  telefono = document.getElementById("telefono").value;
    var  genero = document.getElementById("genero").value;
    var  direccion = document.getElementById("direccion").value;

    if (nombre == "") {
        alert("El nombre es obligatorio")
    }

    console.log("Formulario enviado")
    
    

}
function form() {
    var form = document.getElementById("formContacto")
    alert(form)
}
