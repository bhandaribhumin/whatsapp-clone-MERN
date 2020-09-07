//rafce
import React from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";
const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar src="https://avatars0.githubusercontent.com/u/518974?s=60&u=74488fde8479e5e41cc81cfe0ee821ec5e553257&v=4" />
      <div className="sidebarChat__info">
        <h2>Room Name </h2>
        <p>this is chat lasdasd asda</p>
      </div>
    </div>
  );
};

export default SidebarChat;
