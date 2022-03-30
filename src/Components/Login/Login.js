import React from "react";
import Parse from "parse";
import { Link } from "react-router-dom";
import "../../css/login.css";
const Login = ({ user, onChange, onSubmit }) => {
    if(Parse.User.current()){
        console.log(Parse.User.current().get("firstName"));
        Parse.User.logOut();
    }
    return (
        <div class="login-body">
            <form onSubmit={onSubmit} autoComplete="off">
            <label for="emailControlInput" class="form-label">Email address</label>
            <input type="email" className="form-control" id="emailControlInput" value={user.email}
                onChange={onChange} name="email" required />
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
                name="password"
                required
                />
            
            <p class="message">
               Don't have an account? Click<Link to="/register">here</Link>to register.
            </p>
            <button
                type="submit"
                class="btn btn-outline-light form-control"
                onSubmit={onSubmit}>
                Login
            </button>
            </form>
        </div>
    );
}

export default Login;