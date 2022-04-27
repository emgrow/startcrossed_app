import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import ChatGood from "./ChatGood";
import Parse from "parse";
import { useLocation } from "react-router-dom";

const Chat = () => {
  // TODO: change the way that the flag gets set so it is based on
  // authentication instead of the checkbox
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if(Parse.User.current()){
      console.log("GOOD");
      setFlag(true);
    }
    else {
      console.log("BAD");
      setFlag(false);
    }
  }, []);

  // In this case the flag is acquired through a check box but it could also be received from other methods
  // What is a Parse.User method that would help here?

  return (
    <div>
      {/* change what the ProtectedRoute takes you to */}
      <ProtectedRoute exact flag={flag} component={ChatGood} />
    </div>
  );
};

export default Chat;