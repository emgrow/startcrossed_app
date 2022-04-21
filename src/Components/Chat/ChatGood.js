import Parse from "parse";
import { useEffect } from "react";
import { ChatEngine } from 'react-chat-engine';
import "../../css/chat.css";

const ChatGood = () => {
    var name = Parse.User.current().get("email");
    var secret = "test";
    return (
    <div className="chat chat-wrapper">
        <ChatEngine
            projectID='3ec1a5fa-c0a3-43ca-b8e9-a82d685c882d'
            userName={name}
            userSecret={secret}
        />
    </div>);
};

export default ChatGood;