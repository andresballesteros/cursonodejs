const readline = require("readline");
const Messages = require("./messages");
const Document = require("./document");
const Directory = require("./directory");

const dir = new Directory();

let interface = readline.createInterface(process.stdin, process.stdout);

const tools=`Comandos: :q =salir, :sa = guardar como, :s = guardar
--------------------------------------------------`;

const pantalla = `
                    ================
                    Editor de texto.\n
                    ================
                    Elige una opcion:\n
                    1 Crear nuevo documento
                    2 Abrir documento
                    3 Cerrar editor\n> `;


mainScreen();

function mainScreen(){
    process.stdout.write('\u001b[2J\u001b[0;0H');

    interface.question(pantalla,res =>{

        switch(res.trim()){
            case '1':
                createFile();
                break;
            case '2':
                openFileInterface();
                break;
            case '3':
                interface.close();
                break;
            
                default:
                    mainScreen();

        }

    });
}

function createFile(){

    let file = new Document(dir.getPath());

    renderInterface(file);
    readCommands(file);

}

function openFileInterface(){
    process.stdout.write('\u001b[2J\u001b[0;0H');
    let file = new Document(dir.getPath());
    dir.getFilesInDir();

    interface.question(Messages.requestFileName, name =>{
        if(file.exist(name)){
            openFile(file,name);
        }else if(name == 'volver'){
            interface.removeAllListeners('line');
                mainScreen();
        }else{
            console.log(Messages.fileNotFound);
            setTimeout(()=>{
                interface.removeAllListeners('line');
                mainScreen();
            },2000);
            
        }
    });

}

function openFile(file,name){
    file.open(name);
    renderInterface(file);
    readCommands(file);
}

function renderInterface(file,mensaje){
    process.stdout.write('\u001b[2J\u001b[0;0H');
        (file.getName() == '') ? console.log(`| Untitled |`) :console.log(`| ${file.getName()}`);
        console.log(tools);

        if(mensaje !=null) console.log(mensaje);
        console.log(file.getContent());


}

 function   readCommands(file){
interface.on('line', input =>{
    switch(input.trim()){
        case ':sa':
            saveas(file);
            break;
        case ':q':
            interface.removeAllListeners('line');
            mainScreen();
            break;
        case ':s':
            save(file);
            break;
        default:
            file.append(input.trim());
    }
})
 }

 function saveas(file){
    interface.question(Messages.requestFileName, name=>{
        if(file.exist(name)){
            console.log(Messages.fileExist);
            interface.question(Messages.replaceFile, confirm=>{
                if(confirm =='y' || confirm == 'Y'){
                    file.saveas(name);
                    renderInterface(file, Messages.fileSaved+'\n');
                }else{
                    renderInterface(file, Messages.fileNotSaved+'\n');
    
                }
            });
        }else{
            file.saveAs(name);
            renderInterface(file, Messages.fileSaved+'\n');

        }
    });
 }

 function save(file){
if(file.hasName()){
    file.save();
    renderInterface(file, Messages.fileSaved+'\n');
}else{
    saveas(file);
}
 }