import fs from 'fs'
import readline from 'readline'
import os from 'os'

function findUserName() {
    let userName;
    for (let i = 2; i < process.argv.length; i += 2 ) {
        process.argv[i] = process.argv[i].slice(2,process.argv[i].length)
        if (process.argv[i].slice(0,process.argv[i].indexOf('=')) === 'username') {
            userName = process.argv[i].slice(process.argv[i].indexOf('=')+1,process.argv[i].length);
        }
    }
    return userName;
}

function findCurrentDir(path, options) {
    let currentDir;
    if (!path) {
        currentDir = os.homedir();
    } else {
        if (options === 'up') {
            let tempPath = path.split('\\');
            currentDir = '';
            if (tempPath.length === 1) {
                currentDir += tempPath[0];
                console.log(`You are currently in ${currentDir}`);
                return currentDir;
            }
            for (let i=0; i<tempPath.length-1; i++) {
                if(tempPath.length>=2 && i<(tempPath.length-2)) {
                    currentDir += tempPath[i]+'\\';
                } else {
                    currentDir += tempPath[i]
                }
            }
        }
    }
    console.log(`You are currently in ${currentDir}`);
    return currentDir;
}

export const start = () => {
    let currDir = findCurrentDir();
    console.log(`Welcome to the File Manager, ${findUserName()}!`);
    const rl = readline.createInterface(process.stdin);
    process.stdin.on('data', (data)=>{
        let input = data.toString('utf-8', 0, data.length-1);
        input = input.slice(0,2);
        switch(input) {
            case 'up':
                console.log('currDir: ', currDir);
                currDir = findCurrentDir(currDir, 'up');
            break;
            default:
                console.log('Invalid input');
            break;
        }

    });
     
};
    
start();