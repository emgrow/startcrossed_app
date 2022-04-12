import Parse from "parse";
import { User } from "parse/lib/browser/Parse";
import React, { useEffect, useState} from "react";
import "../../css/search.css";
import Cancer from "../../img/Cancer.jpg";
import { getAllUsers, findCompatibleUsers} from "../../Common/Services/SearchService.js"

const SearchGood = () => {
    const [check, setCheck] = useState(false);

    var array = [];

    var img_src = Cancer;

    useEffect(() => {
        getAllUsers().then(function(allUsers) {
            array = findCompatibleUsers(allUsers, Parse.User.current());
            setCheck(true);
            if(array.length !== 0){
                var profiles = document.getElementById("view-profiles");
                profiles.innerHTML = '<ul>' + array.map(function (user) {
                return '<li><article>' + user.get("firstName") + '</article></li>';
            }).join('') + '</ul>';
    
            }
        });
    }, [array]);

    return(
        <div className="search-page">
            <div className="view-profiles" id="view-profiles">

            </div>
        </div>
    );
};

export default SearchGood;