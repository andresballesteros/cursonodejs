const fs = require("fs");
const readline = require("readline");

let i = readline.createInterface(process.stdin, process.stdout);

i.question("Cuál es tu nombre? > ", (nombre) => {
  //fs.writeFileSync(`./${nombre}`, `Esto dijo ${nombre}\n`);
  let stream = fs.createWriteStream(`./${nombre}.txt`);
  stream.write(`Esto dijo ${nombre}\n`);
  process.stdout.write("Que quieres decir? \n");

  i.on("line", (dicho) => {
    if (dicho.trim() === "salir") {
      stream.close();
      i.close();
    } else {
      stream.write(dicho.trim() + "\n");
      //fs.appendFileSync(`./${nombre}`, dicho.trim() + "\n");
    }
  });
});
