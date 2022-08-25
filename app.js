const fs = require("fs");
const TAREAS = "./app-tareas/tareas.json";
let accion = process.argv[2];
const listar = require('./listaTareas')

// readFile
let data = fs.readFileSync(TAREAS, "utf-8");
let dataParse = JSON.parse(data);

listar(dataParse,accion);

// readFileSync

/* fs.readFile(TAREAS,'utf-8',(error,datos)=>{
    if(error) console.log(`Error: ${error}`);
    else{
        console.log('El contenido es: ',datos)
        tareasParse = JSON.parse(datos)
        switch(accion){
            case 'listar':
                console.log(`LISTA DE TAREAS
---------------------------------------------`)
                for(let i=0;i<tareasParse.length;i++){
                    console.log(`• ${i+1}. ${tareasParse[i].titulo} - ${tareasParse[i].estado}`);
                };
                break;
            case undefined:
                console.log(`Atención - Tenés que pasar una acción.
Las acciones disponibles son: listar
---------------------------------------------`)
                break;
            default:
                console.log(`No entiendo qué querés hacer.
Las acciones disponibles son: listar
---------------------------------------------`)
        }
    } 
}) */

// -------------------------------------------------