import { useEffect, useState, useMemo } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

export function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  async function sendMessage() {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((prev) => [...prev, messageData]);
      setCurrentMessage("");
    }
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((prev) => [...prev, data]);
    });

    return () => socket.removeListener("receive_message");
  }, [socket]);

  return (
    <div className="flex flex-col">
      <div className="chat-header rounded-t bg-zinc-950/30 px-4 py-2">
        <p className="mb-2 text-xl font-medium">Live Chat</p>
      </div>

      <ScrollToBottom className="h-[320px] overflow-y-auto bg-zinc-400">
        {messageList.map((messageContent, index) => (
          <div key={index}>
            <div className="flex flex-col p-2">
              <div
                className={
                  username === messageContent.author
                    ? "w-fit place-self-end rounded bg-emerald-200 p-2 text-zinc-700"
                    : "w-fit rounded bg-zinc-200 p-2 text-zinc-700"
                }
              >
                <p id="message-content">{messageContent.message}</p>
              </div>

              <div
                className={
                  username === messageContent.author
                    ? "flex justify-end gap-2"
                    : "flex gap-2"
                }
              >
                <p className="font-medium text-zinc-600">
                  {messageContent.author}
                </p>
                <p>{messageContent.time}</p>
              </div>
            </div>
          </div>
        ))}
      </ScrollToBottom>

      <div className="chat-footer flex justify-between overflow-hidden rounded-b bg-zinc-100/20">
        <input
          className="mr-4 w-full bg-transparent py-2 pl-4 text-lg text-zinc-50 outline-none"
          type="text"
          value={currentMessage}
          placeholder="Message"
          onKeyDown={(event) => event.key === "Enter" && sendMessage()}
          onChange={(event) => setCurrentMessage(event.target.value)}
        />

        <button
          className="bg-orange-500 px-4 py-2 text-xl duration-200 hover:bg-orange-600"
          onClick={sendMessage}
        >
          &#9658;
        </button>
      </div>
    </div>
  );
}
