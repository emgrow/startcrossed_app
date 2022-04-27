import Parse from "parse";
import { getAllProfiles } from "./ProfileService";

// add a user to the current logged in user's stars list
export const addUserToStarList = (starUser) => {
    console.log("star user is: ", starUser);
    var currentUser = Parse.User.current();
    var star_list = currentUser.get("stars");
    star_list.push(starUser);
    currentUser.set("stars", star_list);
    console.log(star_list);
    currentUser.save();
    checkIfMakesCross(currentUser, starUser);
};

const checkIfMakesCross = (currentUser, staredUserEmail) => {
    var email = currentUser.get("email");
    getAllProfiles().then((result) => {
        var l = result.length;
        for (var index = 0; index < l; index++){
            if (result[index].get("email") === staredUserEmail){
                var staredUser = result[index];
                alert("user found: ", staredUser.get("email"));
                var staredUserStarsList = staredUser.get("stars");
                var ls = staredUserStarsList.length;
                for (var i = 0; i < ls; i++){
                    if(staredUserStarsList[i] === email){
                        // if the newly starred user already had the current user starred, make a cross
                        // by adding each user to the others crosses list
                        currentUser.get("crosses").push(staredUserEmail);
                        staredUser.get("crosses").push(email);
                        currentUser.save(null, {useMasterKey:true});
                    }
                }
            }
        }
    });

}

export const isCrossedWith = (username, currentUser) => {
    var crosses = currentUser.get("crosses");
    if(crosses === undefined){
        return false;
    }
    var index = 0;
    for (index; index < crosses.length; index++){
        if(crosses[index] === username){
            return true;
        }
    }
    return false;

};