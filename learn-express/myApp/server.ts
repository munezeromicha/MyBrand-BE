import http from 'http';
import app from './app';

const port = process.env.PORT || 9000;
const server = http.createServer(app);

server.listen(port);

export default { server }