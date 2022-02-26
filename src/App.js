import './App.css';
import * as Env from "./environments";
import Parse from "parse";
import Components from "./Components/Components.js";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return (
  <div>
    <h1>testing</h1>
    <Components />
  </div>);


}

export default App;
