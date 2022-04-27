import React, { useEffect, useState } from "react";
import { submitInfo } from "../../Common/Services/EditService.js";
import Edit from "../Edit/Edit.js";
import { useHistory } from "react-router-dom";

const AuthRegister = () => {
  const [currUser, setCurrUser] = useState({
    file: "",
    bio: ""
  });

  const history = useHistory();

  window.localStorage.clear();

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (currUser && add) {
      submitInfo(currUser).then(() => {
        // if (userCreated) {
        //   alert(
        //     `${userCreated.get("firstName")}, you successfully registered!`
        //   );
        // }
        // TODO: redirect user to main app
        setAdd(false);
        history.push("/edit");
      });
    }
  }, [newUser, add, history]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: currValue } = e.target;
    console.log(curValue);

    setCurrUser({
      ...currUser,
      [name]: currValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  return (
    <div>
      <Edit
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthRegister;