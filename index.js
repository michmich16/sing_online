import http from 'http';

http.createServer((request, response) => {
    console.log('Hello world');
}).listen(4000)