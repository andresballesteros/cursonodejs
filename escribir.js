const fs = require("fs");
const archivo = "prueba.txt";

// Validar si esite el archivo
/*
if (fs.existsSync(archivo)) {
  console.log("El archivo exite");
} else {
  console.log("El archivo no exite");
}

fs.access(archivo, fs.constants.F_OK, (err) => {
  if (err) {
    console.log("El archivo no exite");
  } else {
    console.log("El archivo exite");
  }
});
*/

// escribir en un archivo

const contenido = "Estae es el contenido del texto";
/*
fs.writeFileSync(archivo, contenido);
console.log("Se ha escrito en el archivo");
*/

//forma asincrona de escritura de archivos

/*fs.writeFile(archivo, contenido, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Se ha escrito en el archivo");
  }
});*/

const textoAdicional = "\nLineaas adicionales para adjuntar texto";

fs.appendFile(archivo, textoAdicional, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Archivo modificado");
  }
});
