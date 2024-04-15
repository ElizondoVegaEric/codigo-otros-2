const formulario = document.querySelector(".formulario") //Se cambia la decalracion por const y #form por .formulario

formulario.onsubmit = function(event){ //se cambia e por event para mejor legibilidad 
  
  event.preventDefault(); //se corrige el nombre del metodo

  let nombreForm = formulario.elements[0] //se cambio el nombre de las variables y la forma de declarar con let 
  let edadForm = formulario.elements[1]//se cambio el nombre de las variables y la forma de declarar con let 
  let nacionalidadForm = formulario.elements[2]//se cambio el nombre de las variables y la forma de declarar con let 

  let nombre = nombreForm.value; //se cambio la declaracion de var por let
  let edad = edadForm.value;//se cambio la declaracion de var por let
  let nacionalidad = nacionalidadForm.value; //se modifico nacionalidad siguendo el formato de los otros dos valores
 
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    nombreForm.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadForm.classList.add("error");
  }
  if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
//se agrego estas dos lineas de codigo para remover el color rojo en caso de que el campo ya sea correcto
  nombreForm.classList.remove("error"); 
  edadForm.classList.remove("error");
  agregarInvitado(nombre, edad, nacionalidad);
  }
}


//se elimino codigo repetido para crear un boton de eliminar elemnto

function agregarInvitado(nombre, edad, nacionalidad) {

//se cambiaron los values por el nombre completo del pais y poder trabajar con el dato como lo entrega value 
//por lo que se elimina los if que cambiaban el valor 

let lista = document.getElementById("lista-de-invitados");//se cambia la decalracion de var a let

let elementoLista = document.createElement("div"); //se cambia la decalracion de var a let
elementoLista.classList.add("elemento-lista"); //se cambio added por el metodo add
lista.appendChild(elementoLista);

//se elimino codigo repetido que hacia lo mismo que la funcion crear elemento
function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span");
let inputNombre = document.createElement("input");
let espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor; 
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
let corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}

//se agrego : al final de casi todas las sentencias