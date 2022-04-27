import Parse from "parse";
import React, { useEffect, useState} from "react";
import "../../css/search.css";
import Cancer from "../../img/Cancer.jpg";
import { getAllUsers, findCompatibleUsers} from "../../Common/Services/SearchService.js";
import {Link} from "react-router-dom";
import { addUserToStarList, isCrossedWith } from "../../Common/Services/StarService.js";

const SearchGood = () => {
    const [check, setCheck] = useState(false);

    var array = [];
    var img_src = Cancer;

    const OnClickHandler = (user) =>{
        document.getElementById("icon").setAttribute("class", "fas fa-star clicked");
        console.log("OnClickHandler reached");
    }

    const StarUser = () =>{
        var userName = document.getElementById("username").value;
        alert(userName + " has been added to your stars list! if " + userName + " stars you back your stars will cross.")
        addUserToStarList(userName);
    }
    
    useEffect(() => {
        getAllUsers().then(function(allUsers) {
            array = findCompatibleUsers(allUsers, Parse.User.current());
            setCheck(true);
            if(array.length !== 0){
                var profiles = document.getElementById("view-profiles");
                profiles.innerHTML = array.map(function (user) {
                    var first = user.get("firstName");
                    var last = user.get("lastName");
                    var sign = user.get("sign");
                    var element = user.get("element");
                    var quality = user.get("quality");
                    var username = user.get("username");
                    if(isCrossedWith(username, Parse.User.current())){
                        return `<div class="grid-tile"><i class="fas fa-star not-clicked"></i><h2>${first} ${last}</h2><img class="profile-img" src=${img_src} /><h3>${sign}</h3><h3>${element}</h3><h3>${quality}</h3><h3>${username}</h3></div>`;
                    }
                    else{
                        return `<div class="grid-tile"><h2>${first} ${last}</h2><img class="profile-img" src=${img_src} /><h3>${sign}</h3><h3>${element}</h3><h3>${quality}</h3><h3>${username}</h3></div>`;
                    }
                }).join('');
            }
        })
        },[array]);

    return(
        <div className="search-page">
            <div className="search-wrapper">
                <h3>The profiles below represent users you are astrologically compatible with! Profiles with<i id="icon" className="fas fa-star clicked"></i> icons are users you are starcrossd with!</h3>
                <br />
                <h3>To add users to your stars list enter their name in the box below. If they star your profile as well, your stars will cross!</h3>
                <input 
                    type="text"
                    id="username"
                    className="form-control"
                />
                <button className="btn btn-outline-light form-control" onClick={StarUser}>Star User</button>
                <br />
                <h3>Want to chat with some of your fellow users? Try out the <Link to="/Chat">Chat Feature!</Link></h3>
            </div>
            <div className="view-profiles" id="view-profiles">
            </div>
        </div>
    );
};

export default SearchGood;