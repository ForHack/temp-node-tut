const os = require('os')

// info about current user
const user = os.userInfo()

// method returns the system uptime in seconds
// console.log(`The system uptime is ${Math.floor((os.uptime() / 60)/60)} minutes`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);