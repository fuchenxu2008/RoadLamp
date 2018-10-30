const express = require('express');
const app = express();
const server = require('http').Server(app);
const fs = require('fs');

const io = require('socket.io')(server);

const sleep = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms))

io.on('connection', (socket) => {
    console.log('user connected');

    // Inform frontend
    socket.on('ready', () => {
        console.log('ready');
        io.emit('ready');
    })

    socket.on('img', (res) => {
        /**
         * res: { 
         *  frame: String
         *  fps: Number
         * }
         */
        res.frame = `data:image/jpeg;base64,${res.frame}`;
        io.emit('image', res);
    })

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
})

server.listen(3333, () => {
    console.log(`Server listening on 127.0.0.1:3333`);
})