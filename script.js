console.log("JavaScript conectado correctamente")
const nombreUsuario = "Marina Casal"
let contadorMensajes = 0
const precioProducto = 19.99
let puntajeJuego = 0

console.log("Nombre de usuario:", nombreUsuario)
console.log("Contador de mensajes:", contadorMensajes)
console.log("Precio del producto:", precioProducto)
console.log("Puntaje del juego:", puntajeJuego)

function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Marina"));
console.log(saludar("Juan"));
console.log(saludar("Ana"));

function calcularDoble(numero) {
  return numero * 2;
}

console.log(calcularDoble(5));
console.log(calcularDoble(10));
console.log(calcularDoble(20));

const tareas = ["Estudiar JavaScript", "Ir al gimnasio", "Tomar mate"];

console.log("Array completo:", tareas);

console.log("Cantidad de tareas:", tareas.length);

console.log("Primera tarea:", tareas[0]);

console.log("Última tarea:", tareas[tareas.length - 1]);

tareas.push("Practicar Git");

console.log("Array actualizado:", tareas);

function clasificarNota(nota) {
  if (nota >= 60) {
    return "Aprobado";
  } else {
    return "Desaprobado";
  }
}

console.log(clasificarNota(95));
console.log(clasificarNota(70));
console.log(clasificarNota(60));
console.log(clasificarNota(45));

console.log("=== Bucle FOR ===");

for (let i = 0; i < tareas.length; i++) {
  console.log("Tarea " + i + ":", tareas[i]);
}

console.log("=== FOREACH ===");

tareas.forEach(function(tarea) {
  console.log(tarea);
});

let indiceAleatorio = Math.floor(Math.random() * tareas.length);

console.log("Índice aleatorio:", indiceAleatorio);
console.log("Tarea seleccionada:", tareas[indiceAleatorio]);

const boton = document.getElementById("cambiarBtn");
const parrafo = document.getElementById("parrafo");

boton.addEventListener("click", function() {
    console.log("El botón fue clickeado correctamente");

    parrafo.textContent = "¡Lo estoy logrando!";

    const colores = ["red", "blue", "green", "yellow", "pink", "orange", "purple"];

    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    parrafo.style.backgroundColor = colorAleatorio;
});

const colorBox = document.getElementById('colorBox'); // Selecciona el div 
const button = document.getElementById('changeColorButton'); // Selecciona el botón

function changeColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Genera un color aleatorio
    colorBox.style.backgroundColor = randomColor; // Cambia el color de fondo del div
}

button.addEventListener('click', changeColor); // Añade un evento al botón