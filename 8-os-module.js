const os = require('os')

//info about the current user
const user = os.userInfo()
console.log(user)

//method returns the uptime in seconds
console.log(`The sysytem uptime is ${os.uptime()} seconds`);


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}
console.log(currentOs.totalMem-currentOs.freeMem)
console.log(currentOs);
