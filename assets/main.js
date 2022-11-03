// ===================================== Ejercicio 1 ==================================

//Cambiar el color del titular del negro actual a rojo y además debe quedar centrado.
// El único cambio será en el bloque cambiar y el código de función cambiar()

// function cambiar() {
//     let titulo = document.getElementById('titular');
//     titulo.style.color = "red";
//     titulo.style.textAlign = 'center';
// }
// ===================================== Ejercicio 1 ==================================

// ===================================== Ejercicio 2 ==================================

// Dscribe un script de nombre creaDiv() que crea un nuevo bloque div en la página modelo. 
//El bloque se creará al pulsar el botón con texto Crear, sus colores serán texto blanco con fondo rojo y el texto quedará centrado. 
//Este texto consiste en la cadena  Javascript permite crear páginas dinámicas.
// El botón ya existe solo es necesario escribir la función, procurando usar los métodos de document para crear nodos.
// function crearDiv() {

//     const newDiv = document.createElement('div'); //SE CREA EL ELEMENTO DIV
//     const txt = document.createTextNode('Javascript permite crear páginas dinámicas.') 
//     newDiv.style.color = "white";                                                     
//     newDiv.style.textAlign = "center";                                                
//     newDiv.style.backgroundColor = "red";                                             
//     newDiv.appendChild(txt);                                                         
//     document.body.appendChild(newDiv);                                               
// ===================================== Ejercicio 2 ==================================

// ===================================== Ejercicio 3 ==================================

// En la página web modelo debes lograr que al pulsar el botón con el texto borrar se deberá eliminar el bloque que aparece bajo el titular, 
// no ocultar, sino borrarlo. Para detalles mira el código fuente de la página. Solo tienes que escribir el código de la función borrar()
// Al pulsar el botón el subtítulo debe dejar de existir en el código de la página. No deb producirse error al volver a pulsar el botón.

// function borrarDiv() {
//     const borrar = document.getElementById('subtitulo');
//     borrar.remove()
// }
// function borrarDiv(){                                      
//     var borrar = document.getElementById('subtitulo');     
//     if(borrar != null){
//        	document.body.removeChild(borrar);
//     }
// }
// ===================================== Ejercicio 3 ==================================

// La página web modelo contiene tres imágenes. Cada imagen está en un bloque figure con un elemento figcaption para un pie de foto. 
// Al pulsar sobre cualquier imagen se debe mostar su atributo alt en su pie de foto. Si el pie ya está relleno se borrará su contenido y no se escribirá nada.
// Cada imagen es como un botón que alterna el pie de foto entre vacio (sin texto) y el valor del atributo alt de cada una.

// function ponerPie(fig) {                                     
//     let pie = fig.getElementsByTagName('figcaption')[0];    
//      let img = fig.getElementsByTagName('img')[0];           
//     if (pie.innerText == '') {                             
//          pie.innerText = img.alt;
//     }
//      else {                                                
//          pie.innerText = '';
//      }
// }
// ===================================== Ejercicio 4 ==================================

// En este script debes leer todos los elementos tipo imagen de la página
//  y mostrar sus urls en un bloque tipo div cuyo id es fuentes y que ya existe en la página modelo usada para estos ejercicios. 
//  El script se ejecutará al pulsar el botón con el texto fuentes
// El bloque ya está creado solo tienes que crear
//  la función denominada fuentesImg() asociada al botón fuentes

// function fuentesImg(){
//     let ElementoImg = document.getElementsByTagName('img');
//     //console.log(ElementoImg);
//     let mostrar =  document.getElementsById('fuentes');
//     }
//     //console.log(fuentesImg())



//     ------------------- FALTA POR TERMINAR , NO HAY UPDATE POR EL MOMENTO----------

// ===================================== Ejercicio 4 ==================================

// El script que tienes que crear en la página modelo debe cambiar la clase del elemento que contiene al encabezado de la página. 
// Al pulsar sobre el titular se añadirá o se eliminarás (toggle) la clase de nombre activo.
// Tienes que modificar el botón clase y completar la función toggle() para producir este efecto.

// function toggle(){

//     let modificacion = document.getElementById('titular');
//     modificacion.classList.toggle('activo')

//     }

// ===================================== Ejercicio 5 ==================================
// Escribe el código de una función nuevoBloque() que deberá crear un nuevo elemento div, con una class de nombre destacar.
//  El bloque contendrá, en negrita, el texto Página Modelo. Este bloque debe aparecer justo antes del bloque subtitulo es decir justo después del titular de la página.
//   Se activará con el botón superior que contiene el texto Subtitulo
// La función se llamara intercalar()

function intercalar() {

    let nuevoDiv = document.createElement("div");
    nuevoDiv.innerText = "HELLO WORLD";
    nuevoDiv.classList.add("destacar");
    contenidoNuevoDiv = document.getElementById('titular');
    contenidoNuevoDiv.appendChild(nuevoDiv);
    nuevoDiv.insertAdjacentElement("afterend",contenidoNuevoDiv);
}








// ===================================== Ejercicio 5 ==================================
// ===================================== Ejercicio 6 ==================================
// ===================================== Ejercicio 6 ==================================
// ===================================== Ejercicio 7 ==================================


// ===================================== Ejercicio 7 ==================================

