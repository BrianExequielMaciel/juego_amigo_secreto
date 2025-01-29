// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaro el arreglo
let listaDeAmigo = [];
//selecciono el elemento que contendra el HTML que contendra los resultados de mostrar los nombre y de el nombre sorteado
let contenedor = document.querySelector(".result-list");

//funcion que creara los elemtos HTML que recibe como paramtro el contenido de lo que va a mostrar
function crearHtml(texto) {
  const item = document.createElement("li");
  item.innerHTML = texto;
  //con el appendChild declaro que guardare dentro del elemento contenedor el elemento li creado y su contenido
  contenedor.appendChild(item);
}

function limpiarDom() {
  contenedor.innerHTML = "";
}

function agregarAmigo() {
  //Obtengo el valor del input
  let contenidoDelInput = document.getElementById("amigo").value;
  //Si el input esta vacio se muestra un alert con el siguiente mensaje
  if (contenidoDelInput === "") {
    alert("Agregue un nombre por favor");
    return;
  }

  //Analiza si el contenido del imput ya existe en la lista
  if (!listaDeAmigo.includes(contenidoDelInput)) {
    //si no existe lo agrega con el metodo push
    listaDeAmigo.push(contenidoDelInput);
    //Evita que se repitan las listas limpiando el dom
    limpiarDom();
    //Use el bucle for para recorrer el arreglo
    for (let i = 0; i < listaDeAmigo.length; i++) {
      //Muestro los resultados a travez de una funcion generica pasando como parametro lo que mostrara
      crearHtml(listaDeAmigo[i]);
    }
  } else {
    alert("Ese nombre ya fue incluido en la lista agregue otro por favor");
  }
}

function sortearAmigo() {
  //Aqui defino una variable que tendra como contenido un numero al azar de la longitud del arreglo listaDeAmigo, lo siguiente lo redondeare quitando los decimales
  //Debo aclarar que es la manera que se me ocurrio que podria elegir de una forma al azar un nombre a travez de su indice utilizando las funciones matematicas
  let sorteo = Math.floor(Math.random() * listaDeAmigo.length);
  //Ahora creo una variable que contiene el arreglo y como indice el numero sorteado en la varible sorteo
  let resultadoDelSorteo = listaDeAmigo[sorteo];
  //Para mostrar el amigo sorteado antes limpio el DOM
  limpiarDom();
  //Agregue una validacion en caso de que el usuario precione el boton sortear amigo antes de que agregue algun nombre
  if (resultadoDelSorteo === undefined) {
    alert("Todavia no has agregado ningun nombre a la lista");
    return;
  }
  //Ahora procedo a mostra el resultado en el DOM, utililoso una funcion generica como lo aprendi en el curso de explorar funciones y listas

  crearHtml(resultadoDelSorteo);
}
