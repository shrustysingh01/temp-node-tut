const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req);
    if(req.url === "/"){
        res.end('Welcome to our homepage');
    }
    else if(req.url === "/about"){
        res.end('Here is our short history');
    }
    else{
        res.end(`
        <h1> Oops!</h1>
        <p>We cant seem to find the page you are looking for </p>
        <a href = "/">back home </a>
    `);
    }

    // res.write('Welcome to our homepage');
    // res.end();
})

server.listen('5000');