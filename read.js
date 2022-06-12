import fs from 'fs'
import { fileURLToPath } from 'url';
import  path  from 'path';

export default function read (pathToFile) {

    fs.readFile(pathToFile, "utf8", (error,data) => {
                if(error) {
                    console.log('Operation failed');
                } else {
                    console.log(data);
                }
            }); 
};