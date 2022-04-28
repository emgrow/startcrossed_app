import React, { useEffect, useState } from "react";
import { createUser } from "../../Common/Services/AuthService.js";
import Register from "../Register/Register.js";
import { useHistory } from "react-router-dom";
import { zodiac, quality, element } from "../../Common/AppTools/AstrologyTools.js";

const AuthRegister = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthday: "",
    sign: "",
    element: "",
    quality: ""
  });

  const history = useHistory();

  window.localStorage.clear();

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && add) {
      // get sign, element, and quality from birthday info
      newUser.sign = zodiac(newUser.birthday);

      newUser.element = element(newUser.sign);

      newUser.quality = quality(newUser.sign);

      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
        }
        // TODO: redirect user to main app
        setAdd(false);
        history.push("/edit");
      });
    }
  }, [newUser, add, history]);

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
    setAdd(true);
  };

  return (
    <div>
      <Register
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthRegister;