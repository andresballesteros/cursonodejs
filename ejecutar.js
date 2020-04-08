const exec = require("child_process").exec;
const x = 10;
const y = 15;

exec("sh script.sh " + x + " " + y, (err, stdout) => {
  if (err) {
    throw err;
  } else {
    console.log("Comando ejecutado");
    console.log(stdout);
  }
});
