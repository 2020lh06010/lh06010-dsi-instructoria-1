
import fs from 'fs';

class leer {
    nombreArchivo:string;
    constructor(archivo:string){
        this.nombreArchivo=archivo;

    }
    async leer() {
        fs.readFile(this.nombreArchivo, 'utf8', (err, data)=>{
            console.log(data);

        });
        
    }
}

let leyendoArchivo=new leer("doc.txt");
leyendoArchivo.leer()