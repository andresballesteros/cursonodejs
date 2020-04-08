var fs = require("fs");

//var files = fs.readdirSync("./");

fs.readdir("./", (err, files) => {
  if (err) {
    throw err;
  } else {
    console.log(files);
    //var archivo = fs.readFileSync("./archivo.txt", "UTF-8");
    fs.readFile("./archivo.txt", "UTF-8", (error, archivo) => {
      if (error) {
        throw error;
      } else {
        console.log(archivo);
      }
    });
  }
  console.log("Contenido del Archivo");
});
