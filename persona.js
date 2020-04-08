const eventEmitter = require("events").EventEmitter;
const util = require("util");

var Persona = function (nombre) {
  this.nombre = nombre;
};
//Heredamos la en el objeto persona eventemitter
util.inherits(Persona, eventEmitter);

module.exports = Persona;
