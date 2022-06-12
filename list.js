import fs from 'fs';
import { fileURLToPath } from 'url';
import  path  from 'path';

const __filename = fileURLToPath(import.meta.url);

export default async function list(pathToFile) {
    let listArr = [];
    pathToFile =  path.resolve(pathToFile);
    let files = fs.readdir(pathToFile, (err, result) => {
        if (err) {
            console.log('Operation failed');
        } else {
            for (let i in result) {
                listArr.push(result[i]);
            }
            console.log(listArr);
        }
    });
};
