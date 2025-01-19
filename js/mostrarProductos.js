import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(nombre,descripcion,precio,imagen){
    const producto = document.createElement("div");
    producto.className= "producto";
    producto.innerHTML= `
                        <img src="${imagen}" alt="Erlenmeyer de laboratorio">
                        <h3>${nombre}</h3>
                        <p>${descripcion}</p>
                        <p>${precio}</p>
                        <button class="delete" onclick="eliminarProducto(this)">Eliminar</button>`;

    return producto;
}

async function listarProductos(){
    try{
        
    const listaAPI = await conexionAPI.listarProductos()

    listaAPI.forEach(producto=>lista.appendChild(crearCard(producto.nombre,producto.descripcion,producto.precio,producto.imagen)))
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :( </h2>`;
    }


}