import Parse from "parse";
import React, { useEffect, useState} from "react";
import "../../css/search.css";
import Cancer from "../../img/Cancer.jpg";
import { getAllUsers, findCompatibleUsers} from "../../Common/Services/SearchService.js"
import {Link} from "react-router-dom";
import SearchResult from "./SearchResult.js";
import Header from "../Header/Header.js"

const SearchGood = () => {
    const [check, setCheck] = useState(false);

    var array = [];

    var img_src = Cancer;

    const OnClickHandler = (user) =>{
        document.getElementById("icon").setAttribute("class", "fas fa-star clicked");
        console.log("OnClickHandler reached");
    }

    useEffect(() => {
        getAllUsers().then(function(allUsers) {
            array = findCompatibleUsers(allUsers, Parse.User.current());
            setCheck(true);
            if(array.length !== 0){
                var profiles = document.getElementById("view-profiles");
                console.log(array[0].get("firstName"));
                // profiles.innerHTML = <div class="view-profiles">
                //     {array.map((user, index) => <div key={user}>TESTING</div>

                //     )}
                // </div>;
                profiles.innerHTML = array.map(function (user) {                    
                    var first = user.get("firstName");
                    var last = user.get("lastName");
                    var sign = user.get("sign");
                    var element = user.get("element");
                    var quality = user.get("quality");
                    // return(
                    //     // <SearchResult />
                    //     <div>PLEASE WORK</div>
                    // );

                    
                    return ('<div class="search-wrapper"><div class="grid-tile"><h2>' + first + ' ' + last + '</h2><img class="profile-img" src=' +
                        img_src + '/><h3>'+ 
                        sign + '</h3><h3>' + 
                        element +'</h3><h3>'+ 
                        quality +
                        '</h3><i class="fas fa-star not-clicked" onClick=' + OnClickHandler(user) + '></i></div></div>');
                     }).join('');
                    //return(`<div class="search-wrapper"><div class="grid-tile"><h2>${first} ${last}</h2><img class="profile-img" src=${img_src} /><h3>${sign}</h3><i class="fas fa-star not-clicked" onClick=${OnClickHandler(user)}></i></div></div>`);})
        }
        });
    }, [array]);

    return(
        <div className="search-page">
            <div className="search-wrapper">
                <p>View the profiles below and click the <i id="icon" className="fas fa-star clicked" onClick={OnClickHandler} >
                </i> icon to star their profile. If your stars cross, try getting to know each other using the<Link to="/Chat">Chat Feature!</Link></p>
            </div>
            <div className="view-profiles" id="view-profiles"></div>
        </div>
    );
};

export default SearchGood;