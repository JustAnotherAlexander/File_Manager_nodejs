import fs from 'fs'
import { fileURLToPath } from 'url';
import  path  from 'path';

export default function create(pathToFile) {
    fs.access(pathToFile, (error)=>{
        if (error) {
            pathToFile = pathToFile.split('\\');
            let file = pathToFile[pathToFile.length-1];
            fs.open(file, 'w', (err) => {
                if (err) {
                    throw new Error('FS operation failed while creating a new file');
                }
            });
            fs.writeFile('fresh.txt', ' ', (err) => {
                if (err){
                    throw new Error('FS operation failed while writing the text into the fresh.txt');
                }
            });
        } else {
            throw new Error('FS operation failed');
        }
    })
    
};