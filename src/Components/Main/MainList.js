import React, { useEffect, useState } from "react";
import {
    getAllProfiles
} from "../../Common/Services/ProfileService.js";

const MainList = () => {
    console.log("in main list");
    const [profiles, setProfiles] = useState([]);
    // const [profile, setProfile] = useState([]);
    useEffect(() => {
        getAllProfiles().then((profiles) => {
            //console.log(profiles);
            //setProfiles(profiles);
        });
    });

    return (
        <div>
            <h1>
                main list
            </h1>
        </div>
    );
};

export default MainList;