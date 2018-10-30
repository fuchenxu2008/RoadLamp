const express = require('express');
const app = express();
const server = require('http').Server(app);
const fs = require('fs');

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('img', (res) => {
        console.log(res)
        io.emit('image', `data:image/jpeg;base64,${res}`)
        // console.log('buf', buf);
        fs.writeFileSync('./hah.jpg', res, 'base64', function(err) {
            console.log(err);
        });
    })

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
})

server.listen(3333, () => {
    console.log(`Server listening on 127.0.0.1:3333`);
})