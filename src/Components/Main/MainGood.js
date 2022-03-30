// import ParseUser from "parse/lib/browser/ParseUser";
import Parse from "parse";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Profile from "../Profile/Profile.js";

// You must make sure to check this protected route even when manually typing in url
// or you can easily bypass the auth
const MainGood = () => {

  // write a function in here that defines the user's first name
  var user = Parse.User.current()
  console.log("current user: ", user.get("firstName"));
  var name = user.get("firstName");

  return (
    <div>
      
      <h1>Welcome back, {name}</h1>
      

      <Profile />

      <h3 className="profile-body">want to check how compatible you are with another sign? try out our
      <Link to="/match">Match Tool</Link>
      </h3>

      <button className="btn-outline-light">
        <Link to="/main">Go back.</Link>
      </button>
    </div>
  );
};

export default MainGood;