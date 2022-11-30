import {useState} from "react";

import "./App.css";
import {socket} from "./socket";

socket.on("ROOM:GET_ROOMS", (rooms) => {
  console.log("rooms", rooms);
});

function App() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const hendleConnect = () => {
    socket.emit("ROOM:JOIN", {
      name,
      room,
    });
  };

  return (
    <>
      name
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="bg-slate-400 border-stone-700 border-2 outline-none h-9 placeholder: text-white"
        placeholder="Имя"
      />
      room
      <input
        value={room}
        onChange={(event) => setRoom(event.target.value)}
        className="bg-slate-400 border-stone-700 border-2 outline-none h-9 placeholder: text-white"
        placeholder="Имя"
      />
      <button onClick={hendleConnect}>Send</button>
    </>
  );
}

export default App;
