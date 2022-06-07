import fs from 'fs'

export const copy = async () => {

    fs.readdir('./files', (err, result) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.readdir('./files_copy', (err) => {
                if (err) {
                    fs.mkdir('./files_copy', (err) => {
                        if (err) {
                            throw new Error('FS operation failed while creating the files_copy folder');
                        } else {
                            for (let i in result) {
                                fs.createReadStream(`./files/${result[i]}`).pipe(fs.createWriteStream(`./files_copy/${result[i]}`));
                            }
                        }
                    })
                } else {
                    throw new Error('FS operation failed');
                }
            })
        }
    });

    
};

copy();