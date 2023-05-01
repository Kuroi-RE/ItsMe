import React from "react";
import Button from "./components/Utilities/Button";
// import { socket } from "../socket";
// import { ConnectionState } from "./components/Messages/ConnectionState";
// import { ConnectionManager } from "./components/Messages/ConnectionManager";
// import { MyForm } from "./components/Messages/Forms";
// import { Events } from "./components/Messages/Events";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001", {
  autoConnect: false,
});

const LiveProject = () => {
  //   const input = document.getElementById("text");
  const messages = document.getElementById("messages");
  const SendMessage = () => {
    console.log("Testing");
    socket.emit("send_messages", {
      message: "Testing",
    });
  };

  socket.on("chat message", function (msg) {
    var item = document.createElement("li");
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
  return (
    <>
      <div className="container mx-auto tracking-wide flex gap-11 flex-col items-start justify-start py-24">
        <div className="text-2xl font-semibold ">
          <ul id="messages"></ul>
        </div>
        <div className="App">
          <input type="text" id="text" placeholder="Send Message" />
          <Button variant="success" onClick={() => SendMessage()}>
            Send Message
          </Button>
        </div>
      </div>
    </>
  );
};

export default LiveProject;
