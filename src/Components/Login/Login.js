import React from "react";
import { Link } from "react-router-dom";
import "../../css/login.css";
const Login = ({ user, onChange, onSubmit }) => {
    return (
        <div class="login-body">
            <form onSubmit={onSubmit} autoComplete="off">
            <label for="emailControlInput" class="form-label">Email address</label>
            <input type="email" class="form-control" id="emailControlInput" value={user.email}
                onChange={onChange} required />
            {/* password */}
                <label
                for="passwordControlInput"
                class="form-label"
                >Password</label>
                <input
                type="password"
                value={user.password}
                onChange={onChange}
                class="form-control"
                id="passwordControlInput"
                required
                />
            
            <p class="message">
               Don't have an account? Click<Link to="/register">here</Link>to register.
            </p>
            <button
                type="button"
                class="btn btn-outline-light form-control"
                onclick="location.href='../src/main.html'">
                Login
            </button>
            </form>
        </div>
    );
}

export default Login;