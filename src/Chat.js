//rafce
import React from "react";
import "./chat.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import MicIcon from "@material-ui/icons/Mic";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>last seen</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Bhumin</span>
          this is message
          <span className="chat__timestamp">{new Date().toString()}</span>
        </p>

        <p className="chat__message chat__reciver">
          <span className="chat__name">Bhumin</span>
          this is message
          <span className="chat__timestamp">{new Date().toString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Bhumin</span>
          this is message
          <span className="chat__timestamp">{new Date().toString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <EmojiEmotionsOutlinedIcon />
        <form>
          <input placeholder="Type a message" type="text  " />
          <button type="submit" onClick={() => console.log("click")}>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
