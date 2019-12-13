const hbs = require('hbs');


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