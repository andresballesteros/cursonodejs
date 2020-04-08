var readline = require("readline");
var util = require("util");
var rl = readline.createInterface(process.stdin, process.stdout);

var persona = {
  nombre: "",
  comentarios: [],
};

rl.question("Cual es tu nombre? ", (respuesta) => {
  persona.nombre = respuesta;
  rl.setPrompt("Dime un comentario: ");
  rl.prompt();
});
rl.on("line", (input) => {
  if (input.trim() === "salir") {
    var mensaje = util.format(
      "Te llamas %s y estos son tus comentarios: %j",
      persona.nombre,
      persona.comentarios
    );

    console.log(mensaje);
    process.exit();
  } else {
    persona.comentarios.push(input.trim());
    rl.setPrompt("Dime un comentario: ");
    rl.prompt();
  }
});
