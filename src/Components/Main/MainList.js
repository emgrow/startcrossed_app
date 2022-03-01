import React, { useEffect, useState } from "react";
import {
    getAllProfiles,
    getById
} from "../../Common/Services/ProfileService.js";

const MainList = () => {
    const [profiles, setProfiles] = useState([]);
    const [profile, setProfile] = useState([]);
    const [readyForRender, setReadyForRender] = useState([]);
    useEffect(() => {

        // get profile info for specific id
        // getById("EpFv6Ym6q9").then((profile) => {
        //     console.log(profile);
        //     setProfile(profile);
        //     console.log(profile.get("firstName"));
        //     setReadyForRender(true);
        //   });
    });

    // make sure profile info is ready to be rendered 
    // for some reason without this extra check nothing is rendering
    if(readyForRender === true){
    return (
        <div>
            <h3>Name: {profile.get('firstName')}</h3>
            <h3>email: {profile.get('email')}</h3>
            <h3>sign: {profile.get('sign')}</h3>
        </div>
    );}
    else{return null;}
};

export default MainList;