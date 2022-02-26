import Parse from "parse";
import { Profiler } from "react";
export const getAllProfiles = () => {
    const Profile = Parse.Object.extend("Profiles");
    const query = new Parse.Query(Profile);
    console.log("query: ", query);
    return query.find().then((results) => {
        console.log("test");
        console.log("results: ", results);
      // returns array of Profile objects
      return results;
    });
  };