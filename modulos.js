var path = require("path");
var util = require("util");
var v8 = require("v8");
//util.log("Hola"); // impresion con fecha y hora
var nombre = "Andres";
var edad = 32;
var texto = util.format("Hola %s, tienes %d años", nombre, edad);
//console.log(path.join(__dirname,'www','img','home','uploads'));
console.log(v8.getHeapStatistics());
