// const os = require('os')
// // info about current user
// const user = os.userInfo()
// console.log(user);

// //method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOS = {
//     name : os.type(),
//     release : os.release(),
//     totalMem : os.totalmem(),
//     freeMem : os.freemem()    
// }

// console.log(currentOS);

const http = require('http')

const server = http.createServer((req,res) => {
    // res.write('Welcome to our home page')
    // res.end()
if(req.url === '/'){
    res.end('Welcome to our home page')
    return;
}
if(req.url === '/about'){
    res.end('Here is our short history')
    return;
}
res.end(`
    <h1>Oops!!</h1>
    <p>We cant seems to find the page you are looking for</p>
    <a href="/">back home</a>`)
})

server.listen(8000)