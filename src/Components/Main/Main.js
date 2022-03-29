import React from "react";
import { useHistory } from "react-router-dom";
const MainModule = () => {
  const history = useHistory();

  const buttonHandler = () => {
    history.push("/home");
  };

  return (
    <div>
      <input type="checkbox" id="flagBox" />
      <button onClick={buttonHandler}>HOME</button>
    </div>
  );
};

export default MainModule;