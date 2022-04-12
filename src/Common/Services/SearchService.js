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

  var element = user.get("element");
  var quality = user.get("quality");
  var compatible_users = [];
  var index = 0;
  console.log("length: ", users.length);
  for(let i = 0; i < users.length; i++){
    if(users[i].get("element") === element || users[i].get("quality") === quality){
        // console.log(users[i].get("firstName"));
        compatible_users[index] = users[i];
        index += 1;
    }
  }

  console.log(compatible_users);

  return compatible_users;

};