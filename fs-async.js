const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8' , (error, result) => {
    if (error) {
        console.log(error);
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (error, result) => {
        if (error) {
            console.log(error);
        }
        const second = result
        writeFile('./content/result-async.txt', `${first} ${second}`, (error, result) => {
                if (error) {
                    return;
                }
                console.log(result);
        })
    })
})