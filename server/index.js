require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const route = require('./route/route');

const PORT = process.env.PORT || 2000;

const app = express();
app.use(cors({ origin: '*' }));
app.use(route);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));