
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const formulario = document.getElementById("formulario");
const enviar = document.getElementById("enviar");



function verif() {
	if (nombre.value.length == 0) {
	document.getElementById("warning").innerHTML = "Completar todos los campos"
	document.getElementById("warning").style.color="#FFFFFF"
	document.getElementById("nombre").style.borderColor= "#FF7F50"
}

else if (apellido.value.length == 0) {
	document.getElementById("warning").innerHTML = "Completar todos los campos"
	document.getElementById("warning").style.color="#FFFFFF"
	document.getElementById("apellido").style.borderColor= "#FF7F50"
}

else if (edad.value.length == 0 || edad.value.length >= 3) {
	document.getElementById("warning").innerHTML = "Edad Incorrecta"
	document.getElementById("warning").style.color="#FFFFFF"
	document.getElementById("edad").style.borderColor= "#FF7F50"
}

else{
	document.getElementById("warning").innerHTML = "REGISTRO EXITOSO"
	document.getElementById("warning").style.color="#008000"
	document.getElementById("nombre").style.borderColor ="#FFFFFF"
	document.getElementById("apellido").style.borderColor ="#FFFFFF"
	document.getElementById("edad").style.borderColor ="#FFFFFF"
}
 }
