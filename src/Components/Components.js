import React from "react";
import MainModule from "./Main/Main.js";
import Home from "./Home/Home.js";
import Login from "./Login/Login.js"
import Register from "./Register/Register.js"
import Match from "./Match/Match.js"
import Profile from "./Profile/Profile.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

const Components = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/match" element={<Match/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/MainModule" component={<MainModule/>} />
      </Routes>
      {/* <Navigate to="/welcome" /> */}
    </Router>
  );
};

export default Components;