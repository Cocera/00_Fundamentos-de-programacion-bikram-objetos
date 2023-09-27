// 01 DECLARACION
let Coche = {marca:"Fiat", modelo:"500", matricula:"White"};


// 02 DECLARACION
let Casa = {codPostal:2480, calle:"Italia", portal:30, piso:5};


// 03 DECLARACION
let FullStackDeveloper = {
    lenguajes:['a', 'b', 'c'],
    proyectos:['a', 'b', 'c']
};


// 04 DECLARACION
let Perro = {
    nombre:"Paco",
    raza:"Galgo",
    color:"Blanco",
    edad:3,
    ladrar: function() {
        console.log("Guau!");
    },
    popo: function() {
        return Math.random()*3;
    }
};


// 05 LECTURA PROPIEDADES
let marcaPortatil = Portatil.marca;


// 06 LECTURA PROPIEDADES
let marcaPortatil2 = Portatil["marca"];


// 07 LECTURA PROPIEDADES
let grupos = Concierto.grupos;


// 08 LECTURA PROPIEDADES
let RGB = [];
RGB.push(Led.rojo);
RGB.push(Led.verde);
RGB.push(Led.azul);


// 09 MODIFICACION PROPIEDADES
Portatil.modelo = "P345";


// 10 MODIFICACION PROPIEDADES
Concierto.cartelera.push("Guns N' Roses");


// 11 MODIFICACION PROPIEDADES
Concierto.fecha = new Date();


// 12 MODIFICACION PROPIEDADES
let Objeto = {nombreArchivo:"x", copias:5, numPaginas:6};
Impresora.imprimiendo = Objeto;


// 13 DECLARACION
let Noticia = {titular:"x", cuerpo:"x"};


// 14 DECLARACION
let Persona = {nombre:"Pepe", apellidos:"Gaston Peral", edad:24};


// 15 DECLARACION
let Avion = {
    numPasajeros:60,
    despegar: function() {
        console.log("despegando")
    },
    volar: function() {
        console.log("llegando al destino")
    },
    aterrizar: function() {
        console.log("aterrizando")
    }
};


// 16 DECLARACION
let Paquete = {contenido:['Salero', 'Peluca', 'Bombillas']};


// 17 DECLARACION
const Pais = {
    numHabitantes:"1,5M", 
    continente:"Europa", 
    gentilicio:"liliputiense"
};


// 18 LECTURA PROPIEDADES
let codError = O_Error.codigo;


// 19 LECTURA PROPIEDADES
let integrantes = Grupo.integrantes;


// 20 LECTURA PROPIEDADES
let nivelesTinta = Impresora.tinta;


// 21 LECTURA PROPIEDADES
let pixeles = Pantalla.pixeles;


// 22 LECTURA PROPIEDADES
let especificaciones = Movil["especificaciones"];


// 23 MODIFICACION PROPIEDADES
Grupo.numIntegrantes = 5;


// 24 MODIFICACION PROPIEDADES
Pantalla.dimensiones = "1920x1080";


// 25 MODIFICACION PROPIEDADES
if (Led.encendido=true) Led.encendido=false
else Led.encendido=true;


// 26 MODIFICACION PROPIEDADES
Movil.temperatura = "20º";
