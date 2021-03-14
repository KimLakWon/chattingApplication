const express = require("express") // express 라이브러리를 받아옴.
const http = require("http")
const app = express(); // express를 실행한 내용을 app에 담음.
const path = require("path") // 서버 주소를 명확히 쓰기 위해 nodejs의 기본 모듈인 path를 불러옴 
const server = http.createServer(app) // express가 http를 통해서 실행될 수 있도록.
const socketIO = require("socket.io")

const io = socketIO(server);

app.use(express.static(path.join(__dirname, "src"))) // 스태틱 폴더를 src으로 지정 (__dirname : app.js가 있는 폴더의 주소.)

const PORT = process.env.PORT || 5000; // 서버를 실행할 포트. 프로세스 환경에 포트가 지정되어 있지 않으면 5000 포트 사용.

server.listen(PORT, ()=>console.log(`server is running ${PORT}`)) // 서버를 실행하는 명령, 저거 $는 템플릿 문법

io.on("connection", (socket)=>{ // 연결을 하면 socket에 담음. 
    socket.on("chatting", (data)=>{ // chatting에서 data를 받아옴.
        io.emit("chatting", data) // data를 chatting 채널에 뿌림.
    })
})

