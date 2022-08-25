const fs = require('fs');

// Crear el txt

fs.writeFile('data1.txt','Nahuel Zelaya',(error)=>{
    if(error) console.log(`Error: ${error}`)
})

// Leer data1.txt pero devuelve un buffer, pero le agregamos el parametro 'utf-8' antes de la función anónima y nos leé bien el archivo.

fs.readFile('data1.txt','utf-8',(error,data)=>{
    if(!error) console.log(data);
    else console.log(`Error: ${error}`)
})

// Renombrar el archivo

fs.rename('data1.txt','nombre.txt',(error)=>{
    if(!error) console.log('Renombrado')
    else console.log(`Error: ${error}`)
})

// Agregar contenido

fs.appendFile('nombre.txt','\nEstoy cursando FullStack',(error)=>{
    if(!error) console.log('Contenido agregado')
    else console.log(`Error: ${error}`)
})

// Crear una copia

fs.createReadStream('nombre.txt').pipe(fs.createWriteStream('nombre_nahuel.txt'))

// Eliminar un archivo

fs.unlink('nombre_nahuel.txt',(error) =>{
    if(error) console.log(`Error: ${error}`)
    else console.log('Contenido eliminado')
})

// Leer un directorio

fs.readdir('./',(error,archivos)=>{
    archivos.forEach(archivo=>{
        console.log(archivo)
    })
})