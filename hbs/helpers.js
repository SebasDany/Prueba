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


let getInfo
let temp

hbs.registerHelper("quito",()=>{
    
    getInfo  = async(pais) => {
        try {
            let coords = await ubicacion.getCiudadLatLon(pais);
            temp = await clima.getClima(coords.lat, coords.lon);
            return `El clima en ${coords.name} es de ${temp} °C`
        } catch (error) {
            console.log(`No se puede obtener el clima de: ${pais}`);
        }
    };
    
    pais("Quito")  
return temp  

});
let temp1
hbs.registerHelper("guay",()=>{
    
    getInfo  = async(pais) => {
        try {
            let coords = await ubicacion.getCiudadLatLon(pais);
            temp1 = await clima.getClima(coords.lat, coords.lon);
            return `El clima en ${coords.name} es de ${temp1} °C`
        } catch (error) {
            console.log(`No se puede obtener el clima de: ${pais}`);
        }
    };
  pais("Guayaquil")
    
    
return temp1

  

});
let temp2
hbs.registerHelper("madrid",()=>{
    getInfo  = async(pais) => {
        try {
            let coords = await ubicacion.getCiudadLatLon(pais);
            temp2 = await clima.getClima(coords.lat, coords.lon);
            return `El clima en ${coords.name} es de ${temp2} °C`
        } catch (error) {
            console.log(`No se puede obtener el clima de: ${pais}`);
        }
    };
  pais("Madrid")
    
return temp2});

let temp3
hbs.registerHelper("paris",()=>{
    getInfo  = async(pais) => {
        try {
            let coords = await ubicacion.getCiudadLatLon(pais);
            temp3 = await clima.getClima(coords.lat, coords.lon);
            return `El clima en ${coords.name} es de ${temp3} °C`
        } catch (error) {
            console.log(`No se puede obtener el clima de: ${pais}`);
        }
    };
  pais("Paris")
    
    
return temp3
});




function pais(nombre){
    getInfo(nombre).then(res => {   
        console.log(res);
    }).catch(err => console.log(err));
}
