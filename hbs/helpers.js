const hbs = require('hbs');
const ubicacion = require('../controlador/ubicacion')
const clima = require('../controlador/clima')
const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: false
    }
}).argv;



// helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' '); // Obtenemos un arreglo con todas las palabras.
    palabras.forEach((palabra, idx) => { //idx tiene la posición de la palabra en el arreglo
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});

hbs.registerHelper("temperatura",()=>{
    let getInfo = async(pais) => {
        try {
            let coords = await ubicacion.getCiudadLatLon(pais);
            let temp = await clima.getClima(coords.lat, coords.lon);
            return `El clima en ${coords.name} es de ${temp} °C`
        } catch (error) {
            console.log(`No se puede obtener el clima de: ${pais}`);
        }
    };
    nombre="Guayaquil"
    getInfo(nombre).then(res => {
        let respuesta=res
        return respuesta
        console.log(res);
    }).catch(err => console.log(err));

    

   

});
