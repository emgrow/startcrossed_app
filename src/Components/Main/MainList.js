import React, { useEffect, useState } from "react";
import {
    getAllProfiles,
    getById
} from "../../Common/Services/ProfileService.js";

const MainList = () => {
    const [profiles, setProfiles] = useState([]);
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        getAllProfiles().then((profiles) => {
            console.log(profiles);
            setProfiles(profiles);
        });

        getById("EpFv6Ym6q9").then((profile) => {
            console.log(profile);
            setProfile(profile);
            console.log(profile.get("firstName"));
          });
    });

    return (
        <div>
            <h1>
                User Profile Information
            </h1>
            <h2>Name: {profile.get('firstName')}</h2>
            <h2>email: {profile.get('email')}</h2>
            <h2>sign: {profile.get('sign')}</h2>
        </div>
    );
};

export default MainList;