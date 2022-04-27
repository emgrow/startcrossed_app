import Parse from "parse";

export const getAllUsers = () => {
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    console.log("query: ", query);
    return query.find().then((results) => {
      // returns array of User objects
      return results;
    });
  };

export const findCompatibleUsers = (users, user) => {

  // element is the element of the logged in user
  var element = user.get("element");
  
  // search_element is the other compatible element
  var search_element;
  if(element === "water") search_element = "earth";
  else if(element === "earth") search_element = "water";
  else if(element === "fire") search_element = "air";
  else if(element === "air") search_element = "fire";

  var compatible_users = [];
  var index = 0;
  console.log("length: ", users.length);
  for(let i = 0; i < users.length; i++){
    if( users[i].get("email") !== user.get("email") && (users[i].get("element") === search_element || users[i].get("element") === element)){
        // console.log(users[i].get("firstName"));
        compatible_users[index] = users[i];
        index += 1;
    }
  }

  return compatible_users;

};