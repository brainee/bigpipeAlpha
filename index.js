require('babel-core/register');
const http = require('http');

let route=require('./route');

http.createServer(route).listen(3006);
