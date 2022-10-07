//para ejecutar coloque npm start   + archivo de origen + archivo de destini
// ejemplo  npm start read.txt write.txt
import * as fs from 'fs';

//primero obtenemos la ruta de origen
let parametro1: string=process.argv[2];
//luego obtenemos la  ruta de destino
let parametro2: string=process.argv[3];

//pasamos la ruta por el parametro al nombre del archivo
let fileNameOrigen: string = parametro1;

let fileNameDestino: string = parametro2;
let content: string='';
//haciendo uso de  la funcion readFile leemos el archivo 
fs.readFile(fileNameOrigen, 'utf8', (err, data)=> {
    if (err) throw err;
 
    content=data;
    //usamos la funcion writeFile para escribir o sobreescribir el archivo
fs.writeFile(fileNameDestino, data, (err)=>{
    if (err) throw err;
    console.log("Felicidades el archivo se fue copiado exitosamente");
})
});

