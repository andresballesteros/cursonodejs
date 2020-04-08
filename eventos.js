//const events = require("events");
//const emitter = new events.EventEmitter();


let persona = new Persona("Bob");

//console.log(`Me llamo ${persona.nombre}`);

persona.on("hablar", (mensaje) => {
  console.log(`${persona.nombre}: ${mensaje}`);
});

persona.emit("hablar", "Hoy es un gran día");

/*
emitter.on("eventoCustom", (mensaje, status) => {
  console.log(`${status}: ${mensaje}`);
});

emitter.emit("eventoCustom", "Mensaje cargado con exito", 200);
*/
