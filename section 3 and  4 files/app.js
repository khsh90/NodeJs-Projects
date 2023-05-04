const http=require('http');
const route=require('./routes')


const server=http.createServer((route.handeler));

server.listen(3000)