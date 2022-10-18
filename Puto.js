// click en el botón
const boton = document.getElementById("boton")

console.log(boton); // 👉️ null

boton.addEventListener("click", preguntarNombre)

const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")

//preguntar el nombre y guardarlo
function preguntarNombre() {
    const nombre = prompt("Introduce Tu Nombre")
    mostrarNombre(nombre)
    console.log(nombre)
}
//insertar el nombre donde ahora estan los puntos...
function mostrarNombre(nombre) {
 h1.textContent = "Hola"
 h2.textContent = nombre
}
