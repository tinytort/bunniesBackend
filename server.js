const app = require('./src/app');
const http = require('http');

require('./src/connect');

const server = http.createServer(app);

server.listen(3001, () => {
    console.log('Server running on ', server.address());
});