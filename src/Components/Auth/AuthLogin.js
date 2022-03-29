import React, { useEffect, useState } from "react";
import { checkUser } from "../../Common/Services/AuthService";
import Login from "../Login/Login.js";
import { useHistory } from "react-router-dom";

const AuthLogin = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const history = useHistory();

  // flags in the state to watch for add/remove updates
  const [check, setCheck] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && check) {
      checkUser(newUser).then((userSaved) => {
        if (userSaved) {
          console.log("auth: ", userSaved.authenticated());
          console.log(userSaved);
          alert(`${userSaved.get("firstName")}, you successfully logged in!`);
          // history.push("/home");
          history.push("/home", { user: userSaved });
        }

        // TODO: redirect user to main app
        setCheck(false);
      });

      // if (checkUser(newUser)) alert(`Logged in!`);
      // setCheck(false);
      // history.push("/home");
    }
  }, [newUser, check, history]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setCheck(true);
  };

  return (
    <Login
      user={newUser}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
    />
  );
};

export default AuthLogin;