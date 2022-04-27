import React from "react";
import { Link } from "react-router-dom";
import "../../css/login.css";
import RegisterLocation from "./RegisterLocation.js";
import RegisterSearch from "./RegisterSearch.js";
const Register = ({ user, onChange, onSubmit }) => {
    return (
        <div class="login-body">
        <form onSubmit={onSubmit} autoComplete="off">
    {/* Register Information */}
    <div class="register-body">
      <div class="mb-3">
         {/* Basid ID */}
        <label for="firstName" class="form-label"
          >First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={onChange}
          required
        />
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={onChange}
          required
        />
      </div>
      {/* Email Register */}
      <div class="mb-3">
        <label for="emailRegister" class="form-label"
          >Email</label>
        <input
          type="email"
          class="form-control"
          id="emailRegister"
          name="email"
          value={user.email}
          onChange={onChange}
          required
        />
      </div>
      {/* Password Register */}
      <div class="mb-3">
        <label for="passwordRegister" class="form-label"
          >Password</label>
        <input
          type="password"
          class="form-control"
          id="passwordRegister"
          name="password"
          value={user.password}
          onChange={onChange}
          required
        />
      </div>
      {/* Confirm Password */}
      {/* <div class="mb-3">
        <label for="passwordConfirm" class="form-label"
          >Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="passwordConfirm"
        />
      </div> */}
      {/* Birth data to send to Astrology API */}
      <div class="mb-3">
        <label for="birthDay" class="form-label"
          >Birthday</label>
        <input
          type="date"
          class="form-control"
          id="birthDay"
          // value={user.birthDay}
          // onChange={onChange}
        />
      </div>
      <div class="mb-3">
        <label for="birthTime" class="form-label"
          >Birthtime</label>
        <input
          type="time"
          class="form-control"
          id="birthTime"
          // value={user.birthTime}
          // onChange={onChange}
        />
      </div>

        {/* <RegisterLocation /> */}
        <RegisterSearch />

        {/* <label for="birthPlace" class="form-label"
          >Birthtime</label>
        <input
          type="text"
          class="form-control"
          id="birthPlace"
          // value={user.birthPlace}
          // onChange={onChange}
        /> */}
      
      {/* Redirect to login */}
      <p class="message">
        Already have an account? Log in<Link to="/login">here</Link>
      </p>
      {/* Submit Information and Redirect */}
      <button
        type="submit"
        class="btn btn-outline-light form-control"
        // onclick="location.href='../src/main.html'"
        // onblur="getForm()"
        onSubmit={onSubmit}
        id="submit"
      >
        Submit
      </button>
    </div>
        </form>
        </div>
    );
}

export default Register;