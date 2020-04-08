const fs = require("fs");

//mkdir

//fs.mkdirSync("img");

/*fs.mkdir('css',(err)=>{
if(err) throw err;
console.log('Carpeta creada de forma correcta')
});*/

// validar si exite una carpeta

if (fs.existsSync("css")) {
  console.log("La carpeta ya existe...");
} else {
  fs.mkdir("css", function (err) {
    if (err) {
      throw err;
    } else {
      console.log("La carpeta creada de forma correcta.");
    }
  });
}
