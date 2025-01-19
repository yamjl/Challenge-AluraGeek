async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos",{
          method:"GET",
          headers:{
          "Content-type":"application/json",
          }
    });

    const conexionConvertida =await conexion.json();

    //console.log(conexionConvertida);
    return conexionConvertida
}

async function crearProductos(nombre,descripcion,precio,imagen) {
    const conexion = await fetch("http://localhost:3001/productos",{
        method: "POST",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify({
            nombre:nombre,
            descripcion:descripcion,
            precio:precio,
            imagen:imagen
        })
    })
    const conexionConvertida=await conexion.json();

    if(!conexion.ok){
        throw new Error ("Ha ocurrido un error al enviar el producto");
    }

    return conexionConvertida;

}

export const conexionAPI ={
    listarProductos,crearProductos
}
