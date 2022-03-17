import Parse from "parse";
import { Profiler } from "react";

// READ operation - get all profiles in Parse class Profiles
export const getAllProfiles = () => {
    const Profile = Parse.Object.extend("Profiles");
    const query = new Parse.Query(Profile);
    console.log("query: ", query);
    return query.find().then((results) => {
      // returns array of Profile objects
      return results;
    });
  };

// READ operation - get profile by ID
export const getById = (id) => {
    const Profile = Parse.Object.extend("Profiles");
    const query = new Parse.Query(Profile);
    return query.get(id).then((result) => {
      // return Profile object with objectId: id
      return result;
    });
  };

export const addSignProfile = (firstName, bday, sign) => {
  console.log("Creating: ", firstName);
  const Profiles = Parse.Object.extend("Profiles");
  const profile = new Profiles();
  // using setter to UPDATE the object
  profile.set("firstName", firstName);
  profile.set("birthDate", bday);
  profile.set("sign", sign);
  return profile.save().then((result) => {
    // returns new Profile object
    return result;
  });
};