const express = require('express');
//引入express
const app = require('express')();
//创建服务器
const http = require('http').createServer(app);
//创建一个双向通信的服务器
const io = require('socket.io')(http);
const path = require('path');

//路径处理
app.use(express.static(path.join(__dirname + '/public')));

//接收请求（将index.html文件发送个客户端）
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
});
//在线用户
let onlineUsers = {};
//用户数
let numUsers = 0;

//监听连接事件
io.on('connection', (socket) => {
    console.log('一位靓仔路过');

    socket.on('disconnect', () => {
        console.log('一位靓仔离开');
    });

    //监听事件，接收数据
    socket.on('sendMessage', (message) => {
        console.log(message);
        //把接收的消息广播
        io.emit('chatMessage',message)
    });
});

//监听端口
http.listen(3000, function () {
    console.log('http://localhost:3000');
});
