import "../../css/login.css";
export default function Login() {
    return (
        <div class="login-body">
            <label for="emailControlInput" class="form-label">Email address</label>
            <input type="email" class="form-control" id="emailControlInput"  />
            {/* password */}
                <label
                for="passwordControlInput"
                class="form-label"
                >Password</label
                >
                <input
                type="password"
                class="form-control"
                id="passwordControlInput"
                />
            
            <p class="message">
               Don't have an account? Click<a href="../register/register.html">here</a>to register.
            </p>
            <button
                type="button"
                class="btn btn-outline-light form-control"
                onclick="location.href='../src/main.html'">
                Login
            </button>
            
        </div>
    );
}