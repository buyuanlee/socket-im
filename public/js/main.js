const app = new Vue({
    el: '#app',
    data: {
        login:true,
        input: '',
        messageList:['sss','xxx']
    },
    methods:{
        messageSubmit(){
            socket.emit('sendMessage',this.input);
            this.input='';
            return false
        }
    },
});
//初始化连接
const socket = io();
//把接收到的消息添加到广播中
socket.on('chatMessage',(message)=>{
    console.log(app.messageList);
    app.messageList.push(message)
});

