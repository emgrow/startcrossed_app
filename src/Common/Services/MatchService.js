import Parse from "parse";

export const getAllSigns = () => {
    const Sign = Parse.Object.extend("Signs");
    const query = new Parse.Query(Sign);
    console.log("query: ", query);
    return query.find().then((results) => {
      // returns array of Profile objects
      return results;
    });
  };

export const getBySign = (sign) => {
    console.log("am I even here");
    const Sign = Parse.Object.extend("Signs");
    const query = new Parse.Query(Sign);
    console.log("query: ", query);
    return query.get(sign).then((result) => {
        // returns array of Profile objects
        return result;
    });
};
