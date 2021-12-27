/* eslint-disable react-hooks/rules-of-hooks */

/* Modules */
import { io } from "socket.io-client";

/* Variables */
let socket: any;

/* Socket Initialization Function */
export const init = () => {
  console.log("Sunucuya bağlanılıyor...");

  socket = io("http://localhost:3001/", {
    transports: ["websocket"]
  })

  socket.on("connect", () => console.log("Sunucuya bağlanıldı!"));
}

/* Sending All Clients Message Function */
export const sendMessage = (msg: any) => {
  if (socket) socket.emit("server_msg", msg);
}

/* Receive and attach all messages from clients */
export const addMessage = (add: any) => {
  socket.on("client_msg", (msg: any) => {
    add(msg) // Callback
  });
}