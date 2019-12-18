//expres funcione como iun servidor web apache
const express = require('express');
const app = express();
const hbs=require('hbs');
require('./hbs/helpers');
app.use(express.static(__dirname + '/public'))

const port=process.env.PORT || 8080

//express engine
hbs.registerPartials(__dirname +'/views/parciales')// el dir me dap del nombre del directorio
app.set('view engine','hbs');

//helpers
// hbs.registerHelper('getAnio',()=>{
//     return new Date().getFullYear()
// });

// hbs.registerHelper('capitalizar',(texto)=>{
//     let palabras=texto.split(' ');
//     palabras.forEach((palabra,idx)=>{
//         palabras[idx]=palabra.CharAt(0).toUpperCase()+palabra.slice(1).toLoweCase();
//     });
//     return palabras.join(' ');
// })

app.get('/', function (req, res) {
    res.render('home',{
        nombre:"sebastian GuanDinago",
        //anio: new Date().getFullYear()
    });

});

app.get('/about', function (req, res) {
    res.render('about'
        //anio: new Date().getFullYear()
    );

});



//nodemon  server.js -e hbs,html,css


// app.get('/', function (req, res) {
    
//   let salida={
//     nombre:'sebastian',
//     edad:25,
//     url: req.url
// } 
//   //res.send('Hello World');
// res.send(salida)
// })


// app.get('/about',(req,res)=>{
//     res.send("esta es mi primera app")
// });

app.listen(port,()=>{
    console.log(` escucjhando peticiones en el puerto ${port}`);
});

///crear una cuenta en  heroku
