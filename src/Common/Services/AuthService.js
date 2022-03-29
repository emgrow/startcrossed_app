import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);

  // for some reason we cannot connect to parse here
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// used in auth login component
export const checkUser = (currentUser) => {
  const user = new Parse.User();

  user.set("password", currentUser.password);
  user.set("username", currentUser.email);

  console.log("checking user ...");
  console.log(user);

  // for some reason we cannot connect to parse here
  return user
    .logIn()
    .then((userSaved) => {
      return userSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });

  // I am guessing that here we will get the User info based on the email
  // and compare the passwords
  // return if the passwords match
  // is this where  we use the flag form local storage he mentioned in class on thursday?
};