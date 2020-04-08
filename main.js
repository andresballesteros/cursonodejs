let x = 10;
/*console.log("1. proceso iniciado...");
setTimeout(() => {
  x = x * 3 + 2;
  console.log("2. proceso terminado...");
}, 2000);

console.log("3. el resultado es: " + x);*/

/*const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    x = x * 3 + 2;
    console.log("2. proceso terminado...");
    resolve(x);
  }, 2000);
});
console.log("1. proceso iniciado...");

promesa.then(res => {
  console.log("3. el resultado es: " + x);
});*/

let usuarios = [
  {
    id: 1,
    nombre: "Marcos"
  },
  {
    id: 2,
    nombre: "lena"
  }
];

let telefonos = [
  {
    id: 1,
    telefono: 123456789
  },
  {
    id: 2,
    telefono: 987654321
  }
];

const obtenerUsuario = id => {
  return new Promise((resolve, reject) => {
    if (usuarios.find(usuario => usuario.id === id)) {
      resolve("El usuario existe");
    } else {
      reject("El usuario no existe");
    }
  });
};

const obtenerTelefono = id => {
  return new Promise((resolve, reject) => {
    if (telefonos.find(telefono => telefono.id === id)) {
      console.log("El telefono existe");
      resolve(obtenerTelefono(id));
    } else {
      reject("El telefono no existe");
    }
  });
};

obtenerUsuario(3)
  .then(res => {
    return res;
  })
  .then(mensaje => {
    console.log(mensaje);
  })
  .catch(error => {
    console.log(error);
  });
