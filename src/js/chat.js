"use strict"

const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");

sendButton.addEventListener("click", ()=>{
    const param = {
        name: nickname.value,
        msg: chatInput.value
    }
    socket.emit("chatting", param)
})

//socket.emit("chatting", "from front") //소켓을 chatting이라는 채널에 from front라는 문자열로 보낼꺼임.

socket.on("chatting", (data)=> { // chatting 채널에서 data를 받아오는 거임.
    console.log(data)
    const li = document.createElement("li");
    li.innerText = `${data.name}님이 - ${data.msg}`;
    chatList.appendChild(li)
})

console.log(socket)