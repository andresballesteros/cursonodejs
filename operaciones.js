const fs = require("fs");

// renombrar síncrono

//fs.renameSync('./prueba.txt','./config.txt');

//renombrar asíncrono
/*
fs.rename("./config.txt", "./prueba.txt", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Nombre modificado de forma correcta");
  }
});
*/

//mover archivo

/*fs.rename("./prueba.txt", "./src/prueba.txt", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Archivo movido de forma correcta");
  }
});*/

//eliminar archivo

fs.unlinkSync("./src/prueba.txt");
console.log("Archivo eliminado de forma correcta");
