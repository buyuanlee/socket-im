
### 初始化项目
- `mkdir socket-im`:命令行创建项目文件夹
  - `cd socket-im`:进入文件夹
- `yarn init`：初始化项目
- `yarn add socket.io express --save`安装依赖
### 目录结构
- node_modules
- public
    - js
        - main.js
    - style
        - main.css
    - index.html
- index.js
- package.json
- README.md
- yarn.lock
### 测试连接
- index.js
```javascript
// index.js
const app = require('express')();
const http = require('http').createServer(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
```
- 运行开启本地服务器命令`node index.js`
- 浏览器打开`http://localhost:3000`   
运行成功后可以在浏览器看到`Hello，world`即代表运行成功 
### 使用`sendFile`运行HTML服务器
```javascript
//index.js
const express = require('express');
const path = require('path');

app.use(express.static(path.join(__dirname + '/public')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'))
});
```
