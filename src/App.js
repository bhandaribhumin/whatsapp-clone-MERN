import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";
function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("messages/sync").then((respose) => {
      setMessages(respose.data);
    });
  }, []);
  useEffect(() => {
    Pusher.logToConsole = true;
    const pusher = new Pusher("YOUR_PUSHER_ID", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
