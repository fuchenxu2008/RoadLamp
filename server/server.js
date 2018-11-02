const express = require('express');
const app = express();
const server = require('http').Server(app);
const fs = require('fs');

const io = require('socket.io')(server);

const sleep = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms))

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('start', (mode) => {
        console.log('Topic: start', mode);
        io.emit(`start_${mode}`);
    })

    socket.on('img', (res) => {
        /**
         * res: { 
         *  frame: String,
         *  fps: Number,
         *  cut_point: Number
         * }
         */
        console.log('Topic: img');
        res.frame = `data:image/jpeg;base64,${res.frame}`;
        io.emit('img', res);
    });

    socket.on('complete', () => {
        console.log('complete');
        io.emit('complete');
    })

    socket.on('stop', () => {
        console.log('Topic: stop');
        io.emit('stop');
    })

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('err', () => {
        console.log('Topic: err');
    })
})

server.listen(3333, () => {
    console.log(`Server listening on 127.0.0.1:3333`);
})