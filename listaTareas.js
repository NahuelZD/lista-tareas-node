let listar = function (data,arg){
    switch (arg) {
        case "listar":
          console.log(`LISTA DE TAREAS
---------------------------------------------`);
          data.forEach((datos,i) => {
            console.log(`• ${i+1}. ${datos.titulo} - ${datos.estado}`);
          });    
          console.log('---------------------------------------------');
          break;
        case undefined:
          console.log(`Atención - Tenés que pasar una acción.
Las acciones disponibles son: listar
---------------------------------------------`);
          break;
        default:
          console.log(`No entiendo qué querés hacer.
Las acciones disponibles son: listar
---------------------------------------------`);
      };
};

module.exports = listar;