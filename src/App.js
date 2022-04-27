import './App.css';
import * as Env from "./environments";
import Parse from "parse";
import Components from "./Components/Components.js";
import Header from "./Components/Header/Header.js";
import "../src/css/styles.css";
import "https://kit.fontawesome.com/a076d05399.js"

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return (
  <div id="app" class="">
    <Header />
    <Components />
  </div>);
}

export default App;
