import React from "react";
import MainList from "./MainList";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const MainModule = () => {
  return (
    <div>
        <h2>User Profile Information</h2>
      <MainList />
    </div>
  );
};

export default MainModule;