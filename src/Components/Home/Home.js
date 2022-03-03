import "../../css/styles.css";
export default function Home() {
    return (
        <div>
        <div class="header-options">
            {/* <!-- Navigate to login page--> */}
            <a href="login/login.html">Login</a>
            {/* <!-- Navigate to register page --> */}
            <a href="register/register.html">Register</a>
        </div>
        {/* <!-- Display zodiac wheel image --> */}
        <div class="wheel">
          <img  src={require("../../img/astrology-circle.png")} />
        </div>
        {/* <!-- Add slogan --> */}
        <div class="message">
            <h2>a match made in heaven</h2>
        </div>
    </div>
    );
  }
  