// fetch
// Nos va a ayudar a hacer un pedido de informacion

let respuesta = fetch('https://rickandmortyapi.com/api/character');

// .then --> obliga a esperar por la promesa cumplida
respuesta.then( (respuesta)=>{
    // recibimos una respuesta en formato response
    // entonces lo cambiamos a formato json que podemos leerlo con js
    return respuesta.json()
    // esto le va a llevar un ratito
}).then( (respuesta)=>{
    // al fin consegui el objeto que me prometio la api
    respuesta.results.forEach( (personajeObjeto) => {
        console.log(personajeObjeto.name)
    });
} )

