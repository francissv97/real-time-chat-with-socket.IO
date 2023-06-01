import { useState } from "react";
import io from "socket.io-client";
import { Chat } from "./Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  function joinRoom() {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true)
    }
  }

  console.log("app rend");

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {!showChat ? (
        <div className="flex flex-col justify-center gap-4 rounded bg-zinc-950/20 p-8 shadow-md">
          <h1 className="text-xl font-medium">Join a Chat</h1>

          <input
            type="text"
            placeholder="Jone..."
            onChange={(event) => setUsername(event.target.value)}
            className="rounded bg-zinc-100/10 py-2 pl-4 text-lg text-zinc-50 outline-none"
          />

          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => setRoom(event.target.value)}
            className="rounded bg-zinc-100/10 py-2 pl-4 text-lg text-zinc-50 outline-none"
          />

          <button
            className="rounded bg-orange-500 px-4 py-2 text-xl duration-200 hover:bg-orange-600"
            onClick={joinRoom}
          >
            Join a room
          </button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
