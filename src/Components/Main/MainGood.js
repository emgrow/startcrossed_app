import React from "react";
import { Link, useParams } from "react-router-dom";

// You must make sure to check this protected route even when manually typing in url
// or you can easily bypass the auth
const MainGood = () => {
  return (
    <div>
      <h1>Welcome to the Protected route</h1>
      <button>
        <Link to="/main">Go back.</Link>
      </button>
    </div>
  );
};

export default MainGood;