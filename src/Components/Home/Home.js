import { Link } from "react-router-dom";
import "../../css/styles.css";
import Icon from "./Icon.js";
export default function Home() {
    return (
        <div>
        <div class="header-options">
            {/*  Navigate to login page */}
            <Link to="/login">Login</Link>
            {/*  Navigate to register page  */}
            <Link to="/register">Register</Link>

            <Link to="/match">Match Tool</Link>

            <Link to="/profile">Profile</Link>
        </div>
        {/*  Display zodiac wheel image  */}
        <div class="wheel">
            <Icon />
        </div>
        {/* Add slogan */}
        <div class="message">
            <h2>a match made in heaven</h2>
        </div>
    </div>
    );
  }
  