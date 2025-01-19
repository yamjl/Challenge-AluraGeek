import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProductos(evento){
    evento.preventDefault();

    const nombre= document.querySelector("[data-nombre]").value;
    const descripcion= document.querySelector("[data-descripcion]").value;
    const precio= document.querySelector("[data-precio]").value;
    const imagen= document.querySelector("[data-imagen]").value;

    try{
        await conexionAPI.crearProductos(nombre,descripcion,precio,imagen);
         
    }catch(e){
        alert(e)
    }

    
}

formulario.addEventListener("submit",evento=>crearProductos(evento));